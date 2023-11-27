import mongoose from 'mongoose';
import { userDB } from '../middlewares/mongoDatabases.js';

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    }, 
    { timestamps: true }
);

export default UserSchema;
