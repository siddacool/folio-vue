const fs = require('fs');
const sharp = require('sharp');

let mainPath = __dirname;
mainPath = mainPath.replace('/pack-pack', '');
const imageBucket = `${mainPath}/public/image-bucket`;

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

const exportImageFile = async ({
  mimetype,
  id,
  data,
  preFix,
  thumbPostFix,
  extension,
  ...restProps
}) => {
  try {
    const mainImage = await sharp(data);
    const { width } = await mainImage.metadata();
    let image = await (mimetype === 'image/jpeg'
      ? mainImage.webp()
      : mainImage);

    if (width > 2500) {
      await mainImage.resize(2500);
    }

    const imageThumb = await (mimetype === 'image/jpeg'
      ? sharp(data).webp().resize(500)
      : sharp(data).resize(500));

    const ext = mimetype === 'image/jpeg' ? 'webp' : extension;

    await image.toFile(`${imageBucket}/${preFix}${id}.${ext}`);
    await imageThumb.toFile(
      `${imageBucket}/${preFix}${id}${thumbPostFix}.${ext}`,
    );

    return Promise.resolve({
      mimetype,
      id,
      data,
      preFix,
      extension: ext,
      thumbPostFix,
      ...restProps,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

module.exports = {
  writeFilePromise,
  getFileExtensionFromMimeType,
  exportImageFile,
};
