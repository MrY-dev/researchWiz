import mongoose from 'mongoose';
import { paperDB } from '../middlewares/database.js';

const { Schema } = mongoose;

const PaperSchema = new Schema(
    {
        title: { type: String, required: true },
        file_path: { type: String, required: true }
    },
    { timestamps: true }
);

const PaperModel = paperDB.model('PaperModel', PaperSchema);

export default PaperModel;

