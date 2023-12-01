import PaperModel from "../models/PaperSchema.js"
import HistModel from "../models/HistSchema.js"
import CommentModel from "../models/CommentSchema.js"
import { Yake } from "yake-wasm";

const getPapers = async (searchTerm,filter)=>{
    const db = PaperModel;
    let dbquery;
    dbquery[filter] = filter;
    let result = await db.find({ dbquery : {$regex: `${searchTerm}`}});
    return result;
};

const getPaperPath = async (paperTitle) => {
  const paperDetail = await PaperModel.find({ title: paperTitle });
  return paperDetail.path;
};

const recPaper = async(email) => {
    const db = PaperModel; 
    const commdb = CommentModel;
    const histdb = HistModel;
    let hist = await histdb.find({
        "email" : email 
    }).sort({'timestamp' : '-1'}).limit(5);

    let comments = [];

    for(let i in hist){
        let comm = await commdb.find({
            "email" :  email,
            "paper_id" : i.paper_id,
        })
        comments.push(comm.comments.toArray())
    }

    let keyword_values = [];

    let result = await db.find({
        "keywords" : {
            "$in" : keyword_values
        }
    })
};

export { getPaperPath, getPapers , recPaper};
