import * as dotenv from 'dotenv';
import express from 'express';
import buildMiddleware from './middleware/buildMiddleware.js';

dotenv.config();

const makeApp = async () => {
  const app = express();
  app.use(express.json());

  // buildMiddleware(app);

  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something broke');
    console.log('This is the rejected field ->', err.field);
    next();
  });

  return app;
};

export default makeApp;
