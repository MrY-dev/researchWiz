import * as dotenv from 'dotenv';
import express from 'express';
import { searchPaper, addComment, sendPaper } from './controllers/paperController.js';

dotenv.config();

const makeApp = async () => {
  const app = express();
  app.use(express.json());

  app.get('/api/paper/search', searchPaper);
  
  app.post('/api/paper/add-comment', addComment);

  app.get('/api/paper/send', sendPaper);


  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something broke');
    console.log('This is the rejected field ->', err.field);
    next();
  });

  return app;
};

export default makeApp;
