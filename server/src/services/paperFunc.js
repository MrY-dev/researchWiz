import PaperModel from "../models/PaperSchema.js"
import HistModel from "../models/HistSchema.js"
import CommentModel from "../models/CommentSchema.js"
import * as yake from './pkg/yake_wasm.js'


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
        for(let i in comm.comments){
            comments.push(i);
        }
    }
    // create yake new instance
    const instance = new yake.Yake(); 
    const in_string = comments.join(" ");
    const raw_keys  = instance.get_n_best(in_string);
    let keyword_values = []; // extract keywords from string
    for(let obj_word in raw_keys){
        keyword_values.push(obj_word["raw"]);

    }
    let result = await db.find({
        "keywords" : {
            "$in" : keyword_values
        }
    })
    return result;
};

export { getPaperPath, getPapers , recPaper};
