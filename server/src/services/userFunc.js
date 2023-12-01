import HistModel  from "../models/HistSchema.js";
import CommentModel from "../models/CommentSchema.js"

const addComments = async(email,comment) => {
    const db = CommentModel;
    try {
        await db.updateOne(
            {email : email},
            {$push : { comments : comment}}
        )
        return true;
    }
    catch(err){
        return false;
    }
};

const addHistory = async(email,history) => {
    const db = HistModel; 
    try{
        await db.updateOne(
            {email: email},
            {$push : { history : history}}
        )
        return true;
    }
    catch(err){
        return false;
    }
};

export {  addComments , addHistory};
