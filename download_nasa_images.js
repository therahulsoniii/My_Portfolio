import fs from 'fs';
import https from 'https';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80',
    filename: 'public/spacex_launch.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    filename: 'public/nvidia_ai_supercomputer.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=80',
    filename: 'public/nvidia_gpu_silicon.jpg'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  for (const img of images) {
    console.log(`Downloading ${img.filename}...`);
    await download(img.url, img.filename);
  }
  console.log('All SpaceX and NVIDIA CSE images downloaded successfully!');
}

main();
