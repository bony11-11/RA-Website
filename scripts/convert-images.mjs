import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_DIR = path.resolve(__dirname, '../public/lovable-uploads');
const TARGET_FORMAT = 'png';

async function convertImages() {
  try {
    console.log('Resolved image directory:', IMAGE_DIR);
    const files = await fs.readdir(IMAGE_DIR);
    
    for (const file of files) {
      if (path.extname(file).toLowerCase() === '.jpg') {
        const inputPath = path.join(IMAGE_DIR, file);
        const outputPath = path.join(IMAGE_DIR, 
          `${path.basename(file, '.jpg')}.${TARGET_FORMAT}`);

        await sharp(inputPath)
          .toFormat(TARGET_FORMAT)
          .toFile(outputPath);

        console.log(`Converted ${file} to ${path.basename(outputPath)}`);
      }
    }
    
    console.log('Conversion complete!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

convertImages();
