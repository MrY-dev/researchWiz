import mongoose from 'mongoose';
import { paperDB } from '../middlewares/mongoDatabases.js';

const { Schema } = mongoose;

const PaperSchema = new Schema(
    {
        paperid: { type: mongoose.ObjectId, required: true, unique: true },
        title: { type: String, required: true },
        author: { type: Array, required: true },
        year: { type: Number, required: true },
        topic: { type: Array },
        keywords: { type: Array },
        file_path: { type: String, required: true }
    },
    { timestamps: true }
);

const PaperModel = paperDB.model('PaperModel', PaperSchema);

export default PaperModel;

