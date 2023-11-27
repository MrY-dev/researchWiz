import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const userURI = process.env.MONGO_URI + process.env.PAPERS_DBNAME;

const userDB = mongoose.createConnection(userURI);

const paperURI = process.env.MONGO_URI + process.env.PAPERS_DBNAME;

const paperDB = mongoose.createConnection(paperURI);

const histURI = process.env.MONGO_URI + process.env.HIST_DBNAME;

const histDB = mongoose.createConnection(histURI);

const commentURI = process.env.MONGO_URI + process.env.COMMENT_DBNAME;

const commentDB = mongoose.createConnection(commentURI);

export { userDB, paperDB, histDB, commentDB };
