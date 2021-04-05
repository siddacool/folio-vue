const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fastify = require('fastify')({ logger: false });
const fileUpload = require('fastify-file-upload');
const dayjs = require('dayjs');
const { exportImageFile, getFileExtensionFromMimeType } = require('./utils');
const { nanoid } = require('nanoid');

const adapter = new FileSync(path.resolve(`${__dirname}/db.json`));
const db = low(adapter);

db.defaults({ homepage_slides: [], images: [] }).write();

fastify.register(require('fastify-cors'), {
  // put your options here
});

fastify.register(fileUpload);

// Declare a route
fastify.get('/', async () => {
  return { hello: 'world' };
});

fastify.get('/homepage-slides', async () => {
  return db.get('homepage_slides').value();
});

const validateHomeSlides = ({ name = '', url = '' }) => {
  const errors = {};
  if (!name || (name && name.trim() === '')) {
    errors.name = 'Invalid name';
  }

  if (!url || (url && url.trim() === '')) {
    errors.url = 'Invalid url';
  }

  return errors;
};

fastify.post('/homepage-slides', async (request, reply) => {
  const parseBody = JSON.parse(request.body);
  const validate = validateHomeSlides(parseBody);
  const idValidate = !Object.keys(validate).length;

  if (!idValidate) {
    reply.code(422);
    return new Error(JSON.stringify(validate));
  }

  db.get('homepage_slides')
    .push({ id: nanoid(), ...parseBody })
    .write();

  return db.get('homepage_slides').value();
});

fastify.get('/images', async () => {
  return db.get('images').value();
});

fastify.post('/images', async (request, reply) => {
  try {
    const files = request.raw.files;

    console.log(request);

    let fileArr = [];
    for (let key in files) {
      const extension = getFileExtensionFromMimeType(files[key].mimetype);

      fileArr.push({
        id: nanoid(),
        mimetype: files[key].mimetype,
        data: files[key].data,
        preFix: 'pic_',
        thumbPostFix: '__thumb',
        extension,
        name: files[key].name,
      });
    }

    const filesMapper = fileArr.map((file) => exportImageFile(file));

    let uploadPromises = await Promise.all(filesMapper);

    uploadPromises = uploadPromises.map(
      ({ id, mimetype, extension, preFix, name, thumbPostFix }) =>
        Object.assign({
          id,
          mimetype,
          extension,
          preFix,
          name,
          createdAt: dayjs().format(),
          thumbPostFix,
        }),
    );

    db.get('images')
      .push(...uploadPromises)
      .write();

    return JSON.stringify(uploadPromises);
  } catch (err) {
    reply.code(422);
    return new Error(err);
  }
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8080);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
