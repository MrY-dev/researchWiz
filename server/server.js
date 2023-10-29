import * as dotenv from 'dotenv';
import makeApp from './app.js';

dotenv.config();

const server = async () => {
  const app = await makeApp();
  const port = process.env.SERVER_PORT || 8080;
  app.listen(port, () => {
    console.log(`Express App listening on port ${port}`);
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received');
    if (server.closeAllConnections) server.closeAllConnections();
    else setTimeout(() => process.exit(0), 5000);
    server.close(() => {
      console.log('Server is now closed.');
    });
  });
};

export default server;

server();
