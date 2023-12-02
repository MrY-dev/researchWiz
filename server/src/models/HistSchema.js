import mongoose from 'mongoose';
import { histDB } from '../middlewares/mongoDatabases';

const { Schema } = mongoose;

const HistSchema = new Schema(
    {
        paper_id: { type: String, required: true},
        email: { type: String, required: true },
    }, 
    { timestamps: true }
);

const HistModel = histDB.model('HistSchema', HistSchema);

export default HistModel;
