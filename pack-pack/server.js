const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fastify = require('fastify')({ logger: false });
const { nanoid } = require('nanoid');

const adapter = new FileSync(path.resolve(`${__dirname}/db.json`));
const db = low(adapter);

db.defaults({ homepage_slides: [] }).write();

fastify.register(require('fastify-cors'), {
  // put your options here
});

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
