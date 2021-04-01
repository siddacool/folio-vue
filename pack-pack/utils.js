const fs = require('fs');

const writeFilePromise = (file, path) => {
  return new Promise((resolve, reject) => {
    let fileUrl = `${path}/${file.preFix}${file.id}.${file.extention}`;
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

const getFileExtentionFromMimeType = (mineType) => {
  let extention = '';

  switch (mineType) {
    case 'image/jpeg':
      extention = 'jpg';
      break;
    default:
      extention = '';
  }

  return extention;
};

module.exports = {
  writeFilePromise,
  getFileExtentionFromMimeType,
};
