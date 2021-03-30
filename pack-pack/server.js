const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fastify = require('fastify')({ logger: true });

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
