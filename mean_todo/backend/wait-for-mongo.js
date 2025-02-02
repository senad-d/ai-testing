const net = require('net');

const options = {
  host: 'mongo',
  port: 27017,
};

const attemptConnection = () => {
  const client = net.createConnection(options, () => {
    console.log('MongoDB is ready. Starting application...');
    client.end();
    process.exit(0);
  });

  client.on('error', (err) => {
    console.error('MongoDB is not ready yet, retrying...');
    setTimeout(attemptConnection, 1000);
  });
};

attemptConnection();