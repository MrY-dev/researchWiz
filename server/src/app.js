import * as dotenv from 'dotenv';
import express from 'express';
import { searchPaper, recommendPaper } from './controllers/paperController';

dotenv.config();

const makeApp = async () => {
  const app = express();
  app.use(express.json());

  app.get('/api/search', searchPaper);
  
  app.post('/api/add-comment', addComment);

  app.get('/api/send-paper', sendPaper);


  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something broke');
    console.log('This is the rejected field ->', err.field);
    next();
  });

  return app;
};

export default makeApp;
