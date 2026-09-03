import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
let PORT = process.env.PORT || 5000;

// Recipient email address for all website contact notifications
const TARGET_EMAIL = process.env.NOTIFICATION_EMAIL || 'justrahul2005@gmail.com';

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Ensure data storage directory exists
const dataDir = path.join(__dirname, 'data');
const dataFilePath = path.join(dataDir, 'transmissions.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf-8');
}

// Helpers for data persistence
const readTransmissions = () => {
  try {
    const content = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(content || '[]');
  } catch (err) {
    console.error('Error reading transmissions data file:', err);
    return [];
  }
};

const saveTransmission = (transmission) => {
  try {
    const current = readTransmissions();
    current.unshift(transmission);
    fs.writeFileSync(dataFilePath, JSON.stringify(current, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving transmission:', err);
    return false;
  }
};

// Email Notification Transporter Setup
const createEmailTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });
  }

  return null;
};

// Function to send email notification to fabulousrahul2005@gmail.com
const sendEmailNotification = async (transmission) => {
  const transporter = createEmailTransporter();

  if (!transporter) {
    console.log(`[EMAIL WORKFLOW] Signal stored in DB & queued for ${TARGET_EMAIL}. (Add GMAIL_USER & GMAIL_APP_PASS to .env for live Gmail delivery).`);
    return { sent: false, reason: 'SMTP credentials not configured in environment variables.' };
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #0b0c10; color: #ffffff; padding: 20px; border-radius: 8px;">
      <h2 style="color: #00d2ff; border-bottom: 2px solid #00d2ff; padding-bottom: 10px;">
        🚀 New Contact Transmission Received
      </h2>
      <p><strong>Signal ID:</strong> <span style="color: #10b981;">${transmission.signalId}</span></p>
      <p><strong>Sender Name:</strong> ${transmission.name}</p>
      <p><strong>Sender Email:</strong> <a href="mailto:${transmission.email}" style="color: #00d2ff;">${transmission.email}</a></p>
      <p><strong>Timestamp:</strong> ${transmission.timestamp}</p>
      <hr style="border: 1px solid #1f293d; margin: 20px 0;" />
      <h3>Message:</h3>
      <div style="background-color: #12141c; padding: 15px; border-left: 4px solid #00d2ff; border-radius: 4px; white-space: pre-wrap;">
        ${transmission.message}
      </div>
      <p style="font-size: 12px; color: #8a909a; margin-top: 20px;">
        Sent automatically from Rahul Soni's SpaceX Portfolio Backend Server.
      </p>
    </div>
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER || process.env.SMTP_USER || `SpaceX Portfolio <no-reply@cosmic-space.io>`,
    to: TARGET_EMAIL,
    subject: `[SpaceX Portfolio] New Signal from ${transmission.name}`,
    text: `New Transmission from ${transmission.name} (${transmission.email}):\n\nSignal ID: ${transmission.signalId}\nTimestamp: ${transmission.timestamp}\n\nMessage:\n${transmission.message}`,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`[EMAIL WORKFLOW] Email notification delivered to ${TARGET_EMAIL}: ${info.messageId}`);
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error(`[EMAIL WORKFLOW] Failed to send email to ${TARGET_EMAIL}:`, err.message);
    return { sent: false, error: err.message };
  }
};

// API Endpoints

// 1. Healthcheck
app.get('/api/health', (req, res) => {
  res.json({
    status: 'UP',
    system: 'SpaceX Ground Control Backend API',
    engineer: 'Rahul Soni',
    targetNotificationEmail: TARGET_EMAIL,
    timestamp: new Date().toISOString(),
  });
});

// 2. Telemetry Diagnostics
app.get('/api/telemetry', (req, res) => {
  res.json({
    callsign: 'RAHUL SONI',
    specialization: 'Artificial Intelligence & Machine Learning Engineering',
    degree: 'B.Tech Computer Science & Engineering',
    institution: 'Lovely Professional University (LPU)',
    status: 'ALL SYSTEMS NOMINAL',
    metrics: {
      python: '98%',
      c_language: '92%',
      sql: '95%',
      orbital_mechanics: 'PRIMARY INTEREST',
      rocket_propulsion: 'PRIMARY INTEREST',
    },
    timestamp: new Date().toISOString(),
  });
});

// 3. Receive Contact Transmission (POST) & Dispatch Email Workflow
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required transmission fields (name, email, message).',
    });
  }

  const signalId = `SIG-${Math.floor(100000 + Math.random() * 900000)}`;
  const timestamp = new Date().toISOString();

  const newTransmission = {
    signalId,
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1',
    userAgent: req.headers['user-agent'] || 'Unknown',
    timestamp,
  };

  // 1. Save to JSON database
  const success = saveTransmission(newTransmission);

  if (!success) {
    return res.status(500).json({ error: 'Failed to record transmission at Ground Control.' });
  }

  console.log(`[BACKEND SERVER] Signal ${signalId} received from ${name} (${email})`);

  // 2. Dispatch Email Workflow to fabulousrahul2005@gmail.com
  const emailResult = await sendEmailNotification(newTransmission);

  res.status(201).json({
    success: true,
    signalId,
    message: `Signal transmission received and routed to ${TARGET_EMAIL}.`,
    emailStatus: emailResult.sent ? 'DELIVERED' : 'QUEUED_LOCAL_DB',
    targetEmail: TARGET_EMAIL,
    timestamp,
  });
});

// 4. Get Transmissions History (GET)
app.get('/api/contact', (req, res) => {
  const transmissions = readTransmissions();
  res.json({
    targetNotificationEmail: TARGET_EMAIL,
    total: transmissions.length,
    transmissions,
  });
});

// Serve static frontend build in production
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(distPath, 'index.html'));
    }
    next();
  });
}

// Start Server with fallback port handling
const startServer = (portToTry) => {
  const server = app.listen(portToTry, () => {
    console.log(`🚀 [SpaceX Ground Control Backend] Server listening on port ${portToTry}`);
    console.log(`📬 [Email Workflow Target] ${TARGET_EMAIL}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${portToTry} in use, trying port ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error('Server error:', err);
    }
  });
};

startServer(Number(PORT));
