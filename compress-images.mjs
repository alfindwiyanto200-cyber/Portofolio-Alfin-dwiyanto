import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs';
import { join, extname } from 'path';

const PUBLIC_DIR = './public';
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 80;

const imageFiles = readdirSync(PUBLIC_DIR).filter(f => {
  const ext = extname(f).toLowerCase();
  return ['.jpg', '.jpeg', '.png'].includes(ext);
});

const targets = imageFiles.filter(f =>
  f.match(/^(diameter|bakmi|jaket|bittersweet|katenjo|machain|rujack|hithat)/)
);

console.log(`\n🗜️  Compressing ${targets.length} project images...\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of targets) {
  const filePath = join(PUBLIC_DIR, file);
  const tmpPath = filePath + '.tmp';
  const ext = extname(file).toLowerCase();
  const sizeBefore = statSync(filePath).size;
  totalBefore += sizeBefore;

  try {
    const img = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

    if (ext === '.png') {
      await img.png({ quality: PNG_QUALITY, compressionLevel: 8 }).toFile(tmpPath);
    } else {
      await img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
    }

    const sizeAfter = statSync(tmpPath).size;

    if (sizeAfter < sizeBefore) {
      unlinkSync(filePath);
      renameSync(tmpPath, filePath);
      totalAfter += sizeAfter;
      const saved = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(1);
      console.log(`✅ ${file.padEnd(25)} ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB  (saved ${saved}%)`);
    } else {
      unlinkSync(tmpPath);
      totalAfter += sizeBefore;
      console.log(`⏭️  ${file.padEnd(25)} already optimized`);
    }
  } catch (e) {
    try { unlinkSync(tmpPath); } catch {}
    totalAfter += sizeBefore;
    console.error(`❌ ${file}: ${e.message}`);
  }
}

const totalBeforeMB = (totalBefore / 1024 / 1024).toFixed(1);
const totalAfterMB  = (totalAfter  / 1024 / 1024).toFixed(1);
const savedMB       = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
console.log(`\n📊 Total: ${totalBeforeMB}MB → ${totalAfterMB}MB  (saved ${savedMB}MB)\n`);
