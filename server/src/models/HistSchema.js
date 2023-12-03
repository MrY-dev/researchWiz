import mongoose from 'mongoose';
import { histDB } from '../middlewares/mongoDatabases.js';

const { Schema } = mongoose;

const HistSchema = new Schema(
    {
        paper_id: { type: mongoose.Types.ObjectId, required: true},
        email: { type: String, required: true },
    }, 
    { timestamps: true }
);

const HistModel = histDB.model('HistModel', HistSchema);

export default HistModel;
