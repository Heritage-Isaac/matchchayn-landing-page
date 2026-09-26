const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure Cloudinary from the environment variable
// The CLOUDINARY_URL is automatically picked up by the SDK, 
// but we'll log to confirm
console.log('Connecting to Cloudinary...');

const directoryPath = path.join(__dirname, '..', 'src', 'emails', 'static');

async function uploadImages() {
  try {
    const files = fs.readdirSync(directoryPath);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
        const filePath = path.join(directoryPath, file);
        console.log(`Uploading ${file}...`);
        
        const result = await cloudinary.uploader.upload(filePath, {
          folder: 'matchchayn-emails',
          use_filename: true,
          unique_filename: false,
          overwrite: true
        });
        
        console.log(`Uploaded ${file}: ${result.secure_url}`);
      }
    }
    console.log('All uploads complete!');
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
  }
}

uploadImages();
