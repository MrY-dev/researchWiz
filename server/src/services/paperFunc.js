import mongoose, { mongo } from "mongoose";
import PaperModel from "../models/PaperSchema.js"
import HistModel from "../models/HistSchema.js"
import CommentModel from "../models/CommentSchema.js"
import keyword_extractor from  "keyword-extractor"


const getPapers = async (searchTerm,filter)=>{
    const db = PaperModel;
    let result = await db.find({ [`${filter}`] : {$regex: searchTerm, $options: 'i'}});
    let status = "OK";
    if(!result){
        status = "BAD"
    }
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
    },).sort({'timestamp' : '-1'}).limit(5);

    if(hist.length === 0){
        let result = await db.find({}).limit(5);
        return result
    }
    let comments = [];
    for(let i in hist){
        let comm = await commdb.find({
            "email" :  email,
            "paperid" : hist[i]['paperid'],
        })
        if(comm.length === 0){
            continue
        }
        for (let j in comm[0]['comments']){
           comments.push(comm[0]['comments'][j])
        }
    }
    if(comments.length === 0){
        let hist_keywords = [];
        for(let i in hist){
            let paper = await db.find({
                "paperid" : hist[i]['paperid']
            })
            for(let i in paper[0]['keywords']){
                hist_keywords.push(paper[0]['keywords'][i])
            }
        }
        let dbresult = await db.find({
            "keywords" : {
                "$in" : hist_keywords
            }
        })
        return dbresult;
    }
   const in_string = comments.join(" ");
 
   const keyword_values = keyword_extractor.extract(in_string,{
        language: "english",
        remove_digits : true,
        return_changed_case: true,
        remove_duplicates: true,
    })
    
    let dbresult = await db.find({
        "keywords" : {
            "$in" : keyword_values
        }
    })
    if(!dbresult){
    }
    return dbresult;
};

const getRec = async(email) => {
    const db = HistModel;
    const paperdb = PaperModel;
    let result = await db.find({
        "email" : email
    }).sort({'timestamp' : '-1'}).limit(5);
    let papers = []
    for(let i in result){
        let md = await paperdb.find({paperid : result[i]['paperid']})
        papers.push(md[0])
    }
    return papers;
};

const getPaperMD = async (paperid) => {
    const db = PaperModel;
    const pid = new mongoose.Types.ObjectId(paperid)
    const res = await db.find({paperid: pid})
    return res;
};

export { getPaperPath, getPapers , recPaper , getRec, getPaperMD};
