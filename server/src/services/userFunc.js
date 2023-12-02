import HistModel  from "../models/HistSchema.js";
import PaperModel from "../models/PaperSchema.js";
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
    const paperdb = PaperModel;

    let dbquery = await paperdb.find({
        "email" : email,
        "title" : history,
    });
    if(dbquery){
        try{
            await db.updateOne({
                "email" : email,
                "paper_id" : paperid,
                createdAt: new Date(),
            })
            return true;
        }
        catch(err){
            return false;
        }
    }

    let paperid = dbquery.paper_id;
    db.updateOne({
        "email": email,
        "paper_id": paperid,
        updatedAt: new Date(),
    });
};

const getHistory = async(email) => {

}

export {  getHistory , addComments , addHistory  };

