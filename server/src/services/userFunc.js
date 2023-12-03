import bcrypt from 'bcrypt';
import HistModel  from "../models/HistSchema.js";
import UserModel from "../models/UserSchema.js";
import CommentModel from "../models/CommentSchema.js"

const addComments = async(email,comment,paperid) => {
    const db = CommentModel;
    try {
        await db.updateOne(
            {email : email, paper_id : paperid},
            {$push : { comments : comment}},
            {upsert: true})
        return true;
    }
    catch(err){
        return false;
    }
};

const addHistory = async(email,paperid) => {
    const db = HistModel; 

    let dbquery = await db.find({
        "email" : email,
        "paper_id" : paperid,
    });
    
    console.log(dbquery.length)
    if(dbquery.length === 0){
        try{
            await db.create({
                "email" : email,
                "paper_id" : paperid,
            })
            return true;
        }
        catch(err){
            return false;
        }
    }

    await db.updateOne({
        "email": email,
        "paper_id": paperid,
        updatedAt: new Date(),
    });

    return true;
};

const getHistory = async(email) => {
    const db = HistModel;
    let query = await db.find({
        "email" : email,
    });

    let result = []
    let p_res = {}
    for(i in query){
        try {
            p_res = await db.findOne({paper_id: i.paper_id});
            result.push(p_res.title);
        } catch (err) {
            console.log(`Fetching of ${i.paper_id} failed`);
        }
    }

    return result;
}

const getName = async (email) => {
    const db = UserModel;
    let query = await db.findOne({
        "email": email,
    });
    return query;
};

const addUser = async (name, email, password) => {
    const db = UserModel;
    const hashedPassword = await bcrypt.hash(password, 12);
    
    await db.create({
        name,
        email,
        password: hashedPassword
    });
};

const checkUser = async (email, password) => {
    const db = UserModel;

    const query = await db.findOne({email: email});
    if (!query){
        throw new Error('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, query.password);

    if (!passwordMatch) {
      throw new Error('Invalid Credentials');
    }
};

const getCom = async (email,paperid)=>{
    const db = CommentModel;
    const query = await db.find({
        email : email,
        paperid : paperid
    })
    return query
}

export {  getHistory , addComments , addHistory, getName, addUser, checkUser,getCom  };

