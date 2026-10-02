const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const engineerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>

    <!-- Outer Border Glow -->
    <linearGradient id="border-glow" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#c084fc" />
      <stop offset="50%" stop-color="#818cf8" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>

    <!-- Left Bracket Gradient -->
    <linearGradient id="left-bracket" x1="14" y1="20" x2="24" y2="44" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#818cf8" />
    </linearGradient>

    <!-- Center Slash Gradient -->
    <linearGradient id="slash-grad" x1="36" y1="16" x2="28" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#f472b6" />
      <stop offset="50%" stop-color="#c084fc" />
      <stop offset="100%" stop-color="#9333ea" />
    </linearGradient>

    <!-- Right Bracket Gradient -->
    <linearGradient id="right-bracket" x1="40" y1="20" x2="50" y2="44" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#a855f7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>

    <!-- Ambient Center Glow -->
    <radialGradient id="center-glow" cx="32" cy="32" r="26" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background Squircle -->
  <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#bg)" />
  <circle cx="32" cy="32" r="26" fill="url(#center-glow)" />
  <rect x="2" y="2" width="60" height="60" rx="16" stroke="url(#border-glow)" stroke-width="2.5" />

  <!-- Engineer Code Brackets & Slash -->
  <!-- Left Bracket < -->
  <path
    d="M22 20 L13 32 L22 44"
    stroke="url(#left-bracket)"
    stroke-width="5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <!-- Center Forward Slash / -->
  <path
    d="M36 17 L28 47"
    stroke="url(#slash-grad)"
    stroke-width="4.5"
    stroke-linecap="round"
  />

  <!-- Right Bracket > -->
  <path
    d="M42 20 L51 32 L42 44"
    stroke="url(#right-bracket)"
    stroke-width="5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <!-- Live Pulse Dot at top right -->
  <circle cx="49" cy="15" r="2.5" fill="#10b981" />
</svg>`;

async function main() {
  const root = __dirname;
  const svgBuffer = Buffer.from(engineerSvg);

  // Write SVG files
  fs.writeFileSync(path.join(root, '..', 'public', 'icon.svg'), engineerSvg);
  fs.writeFileSync(path.join(root, '..', 'src', 'app', 'icon.svg'), engineerSvg);

  // Generate PNG buffers
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();

  fs.writeFileSync(path.join(root, '..', 'public', 'apple-icon.png'), png180);
  fs.writeFileSync(path.join(root, '..', 'public', 'icon-192.png'), png192);
  fs.writeFileSync(path.join(root, '..', 'public', 'icon-512.png'), png512);
  fs.writeFileSync(path.join(root, '..', 'public', 'favicon-32x32.png'), png32);
  fs.writeFileSync(path.join(root, '..', 'public', 'favicon-16x16.png'), png16);
  fs.writeFileSync(path.join(root, '..', 'src', 'app', 'apple-icon.png'), png180);

  // Build ICO container
  const images = [
    { size: 16, buf: png16 },
    { size: 32, buf: png32 },
    { size: 48, buf: png48 }
  ];

  const headerLen = 6;
  const dirEntryLen = 16;
  const numImages = images.length;
  let offset = headerLen + (dirEntryLen * numImages);

  const header = Buffer.alloc(headerLen);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4);

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntryLen);
    entry.writeUInt8(img.size, 0);
    entry.writeUInt8(img.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += img.buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...images.map(i => i.buf)]);

  fs.writeFileSync(path.join(root, '..', 'public', 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(root, '..', 'src', 'app', 'favicon.ico'), icoBuffer);

  console.log('Successfully generated Engineer code emblem favicons and icons!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
