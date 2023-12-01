import mongoose from 'mongoose';
import { commentDB } from '../middlewares/mongoDatabases.js';

const { Schema } = mongoose;

const CommentSchema = new Schema(
    {
        paper_id: { type: String, required: true },
        email: { type: String, required: true },
        comments: { type: Array },
    }, 
    { timestamps: true }
);

const CommentModel = commentDB.model('CommentModel', CommentSchema);

export default CommentModel;
