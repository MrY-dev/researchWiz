import * as dotenv from 'dotenv';
import express from 'express';
import { searchPaper, addComment, sendPaper  } from './controllers/paperController.js';
import { addHist,getHist ,signupUser,loginUser} from './controllers/userController.js'
import { recPaper } from './services/paperFunc.js';

dotenv.config();

const makeApp = async () => {
  const app = express();
  app.use(express.json());

  app.post('/api/user/signup', signupUser);

  app.post('/api/user/login', loginUser)

  app.get('/api/user/get-history', getHist);

  app.post('/api/user/add-history', addHist);

  app.get('/api/paper/search', searchPaper);
  
  app.post('/api/paper/add-comment', addComment);

  app.get('/api/paper/recom-paper', recPaper);

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
