const path = require('path');
const fs = require('fs');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fastify = require('fastify')({ logger: false });
const fileUpload = require('fastify-file-upload');
const { nanoid } = require('nanoid');

let mainPath = __dirname;
mainPath = mainPath.replace('/pack-pack', '');

const adapter = new FileSync(path.resolve(`${__dirname}/db.json`));
const db = low(adapter);

db.defaults({ homepage_slides: [] }).write();

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

function writeFile(file) {
  return new Promise((resolve, reject) => {
    let fileUrl = `${mainPath}/public/image-bucket/${file.name}`;
    fs.writeFile(fileUrl, file.data, (err) => {
      if (err) reject(err);
      else resolve(fileUrl);
    });
  });
}

fastify.post('/image', async (request, reply) => {
  const files = request.raw.files;

  let fileArr = [];
  for (let key in files) {
    fileArr.push({
      name: files[key].name,
      mimetype: files[key].mimetype,
      data: files[key].data,
    });
  }

  const filesMapper = fileArr.map((file) => writeFile(file));

  Promise.all(filesMapper).then(
    () => {
      reply.send(fileArr);
    },
    (err) => {
      throw err;
    },
  );
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
