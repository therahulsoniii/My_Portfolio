import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw } from 'lucide-react';
import { audioEngine } from '../utils/AudioEngine';

export default function TerminalSection({ setIsLaunching, setIsWarping }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { text: 'COSMIC GROUND CONTROL CLI [v4.8.2]', type: 'system' },
    { text: 'Type "help" to list available telemetry commands.', type: 'system' },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim().toLowerCase();
      audioEngine.playTerminalKey();

      const newHistory = [...history, { text: `astra-01@ground-control:~$ ${inputVal}`, type: 'user' }];

      switch (cmd) {
        case 'help':
          newHistory.push({
            text: `AVAILABLE COMMANDS:\n  • help      - Display available CLI commands\n  • bio       - Print Commander background profile\n  • skills    - Display engineering payload specifications\n  • projects  - List active mission payloads\n  • launch    - Initiate rocket thruster ignition & liftoff\n  • warp      - Engage hyperdrive space starfield warp\n  • contact   - Output ground control communication links\n  • status    - Run live telemetry diagnostic check\n  • clear     - Clear terminal screen history`,
            type: 'output',
          });
          break;
        case 'bio':
          newHistory.push({
            text: `COMMANDER PROFILE:\n  Name: Alex Vance\n  Rank: Lead Aerospace Software Engineer\n  Specialization: WebGL 3D Graphics, High-Concurrency APIs, Space Telemetry\n  Location: Ground Control Base / Orbital Station 07`,
            type: 'output',
          });
          break;
        case 'skills':
          newHistory.push({
            text: `ENGINEERING SPECS:\n  [FRONTEND]: React, Three.js, WebGL, TypeScript, CSS Glassmorphism\n  [BACKEND ]: Node.js, Go, Python, WebSockets, GraphQL, Redis\n  [AI & ML ]: Gemini API, PyTorch, Computer Vision, Space Data Pipelines\n  [INFRA   ]: Docker, Kubernetes, AWS Cloud, CI/CD`,
            type: 'output',
          });
          break;
        case 'projects':
          newHistory.push({
            text: `ACTIVE PAYLOAD MISSIONS:\n  [01] Astra AI Orbital Defense Command\n  [02] Orion Rocket Launch Telemetry System\n  [03] Mars Autonomous Surface Explorer`,
            type: 'output',
          });
          break;
        case 'launch':
          setIsLaunching(true);
          audioEngine.playRocketLaunch();
          newHistory.push({
            text: `>>> INITIATING ROCKET IGNITION... BOOSTERS ARMED. LIFTOFF CONFIRMED!`,
            type: 'success',
          });
          setTimeout(() => setIsLaunching(false), 4000);
          break;
        case 'warp':
          setIsWarping((prev) => !prev);
          audioEngine.playWarp();
          newHistory.push({
            text: `>>> TOGGLING HYPERDRIVE WARP DRIVE...`,
            type: 'success',
          });
          break;
        case 'contact':
          newHistory.push({
            text: `COMMUNICATION FREQUENCY:\n  Email: alex.vance@cosmic-space.io\n  GitHub: github.com/cosmic-commander\n  LinkedIn: linkedin.com/in/cosmic-commander`,
            type: 'output',
          });
          break;
        case 'status':
          newHistory.push({
            text: `DIAGNOSTIC RESULTS:\n  [SYS_CPU ]: 1.2% UTILIZATION (OPTIMAL)\n  [SYS_MEM ]: 512MB / 64GB (NOMINAL)\n  [ORBIT   ]: 408.0 KM ALTITUDE\n  [SIGNAL  ]: 99.8% STRENGTH`,
            type: 'output',
          });
          break;
        case 'clear':
          setHistory([]);
          setInputVal('');
          return;
        default:
          if (cmd !== '') {
            newHistory.push({
              text: `Command not recognized: "${cmd}". Type "help" for available commands.`,
              type: 'error',
            });
          }
      }

      setHistory(newHistory);
      setInputVal('');
    } else {
      audioEngine.playTerminalKey();
    }
  };

  return (
    <section id="terminal" className="space-section">
      <div className="section-header">
        <div className="section-subtitle">INTERACTIVE CLI // GROUND CONTROL</div>
        <h2 className="section-title">MISSION CONTROL TERMINAL</h2>
        <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0.5rem auto 0' }}>
          Execute ground control commands to query commander data, launch rockets, or trigger hyperdrive.
        </p>
      </div>

      <div
        className="glass-panel"
        style={{
          padding: '0',
          overflow: 'hidden',
          maxWidth: '900px',
          margin: '0 auto',
          borderColor: 'var(--color-cyan)',
          boxShadow: '0 0 40px rgba(0, 243, 255, 0.15)',
        }}
      >
        {/* Terminal Header Bar */}
        <div
          style={{
            background: 'rgba(5, 8, 20, 0.9)',
            padding: '0.75rem 1.25rem',
            borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            <span
              style={{
                fontFamily: 'var(--font-code)',
                fontSize: '0.8rem',
                color: 'var(--color-cyan)',
                marginLeft: '0.5rem',
              }}
            >
              astra-01@ground-control:~
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => {
                setHistory([]);
                audioEngine.playClick();
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-code)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              <RefreshCw size={12} /> CLEAR
            </button>
          </div>
        </div>

        {/* Terminal Output Display */}
        <div
          style={{
            padding: '1.5rem',
            minHeight: '320px',
            maxHeight: '450px',
            overflowY: 'auto',
            background: 'rgba(3, 6, 17, 0.95)',
            fontFamily: 'var(--font-code)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
          }}
        >
          {history.map((item, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '0.5rem',
                color:
                  item.type === 'user'
                    ? 'var(--color-cyan)'
                    : item.type === 'error'
                    ? '#ef4444'
                    : item.type === 'success'
                    ? '#ff6b00'
                    : '#10b981',
                whiteSpace: 'pre-wrap',
              }}
            >
              {item.text}
            </div>
          ))}

          {/* Interactive Input Prompt */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <span style={{ color: 'var(--color-cyan)' }}>astra-01@ground-control:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              placeholder="type 'help' or 'launch'..."
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontFamily: 'var(--font-code)',
                fontSize: '0.9rem',
                width: '100%',
              }}
              autoFocus
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
}
