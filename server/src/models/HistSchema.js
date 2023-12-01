import mongoose from 'mongoose';
import { histDB } from '../middlewares/mongoDatabases';

const { Schema } = mongoose;

const HistSchema = new Schema(
    {
        email: { type: String, required: true },
        history: { type: Array, required: true },
    }, 
    { timestamps: true }
);

export default HistSchema;
