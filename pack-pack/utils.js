const fs = require('fs');

const writeFilePromise = (file, path) => {
  return new Promise((resolve, reject) => {
    let fileUrl = `${path}/${file.preFix}${file.id}.${file.extension}`;
    fs.writeFile(fileUrl, file.data, (err) => {
      if (err) reject(err);
      else
        resolve({
          fileUrl,
          ...file,
        });
    });
  });
};

const getFileExtensionFromMimeType = (mineType) => {
  let extension = '';

  switch (mineType) {
    case 'image/jpeg':
      extension = 'jpg';
      break;
    default:
      extension = '';
  }

  return extension;
};

module.exports = {
  writeFilePromise,
  getFileExtensionFromMimeType,
};
