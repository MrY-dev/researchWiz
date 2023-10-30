import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const paperURI = process.env.MONGO_URI + process.env.PAPERS_DBNAME;

const paperDB = mongoose.createConnection(paperURI);

export { paperDB };
