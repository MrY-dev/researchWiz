import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const userURI = process.env.MONGO_URI + process.env.PAPERS_DBNAME;

const userDB = mongoose.createConnection(userURI);

const paperURI = process.env.MONGO_URI + process.env.PAPERS_DBNAME;

const paperDB = mongoose.createConnection(paperURI);

export { userDB, paperDB  };
