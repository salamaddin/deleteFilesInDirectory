const fs = require('fs/promises');
const path = require('path');

async function deleteFilesInDirectory(directoryPath, fileExtension) {
  try {
    await readDirectory(directoryPath, fileExtension);
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

async function readDirectory(directoryPath, fileExtension) {
  try {
    const files = await fs.readdir(directoryPath);
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      await processFile(filePath, fileExtension);
    }
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}

async function processFile(filePath, fileExtension) {
  try {
    const stats = await fs.stat(filePath);
    if (stats.isDirectory()) {
      await deleteFilesInDirectory(filePath, fileExtension);
    } else {
      await deleteFile(filePath, fileExtension);
    }
  } catch (err) {
    console.error('Error getting file stats:', err);
  }
}

async function deleteFile(filePath, fileExtension) {
  try {
    if (path.extname(filePath) === fileExtension) {
      await fs.unlink(filePath);
      console.log('Deleted file:', filePath);
    }
  } catch (err) {
    console.error('Error deleting file:', err);
  }
}

// Get directory path and file extension from command-line arguments
const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

if (!directoryPath || !fileExtension) {
  console.error('Please provide directory path and file extension.');
  process.exit(1);
}

// const directoryPath = 'C:/Users/User/Desktop/code practice/test';
// const fileExtension = '.xlsx';
deleteFilesInDirectory(directoryPath, fileExtension);