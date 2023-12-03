import PaperModel from "../models/PaperSchema.js"
import HistModel from "../models/HistSchema.js"
import CommentModel from "../models/CommentSchema.js"
import keyword_extractor from  "keyword-extractor"
import { histDB } from "../middlewares/mongoDatabases.js";


const getPapers = async (searchTerm,filter)=>{
    const db = PaperModel;
    console.log(filter)
    console.log(searchTerm)
    let result = await db.find({ [`${filter}`] : {$regex: searchTerm,}});
    let status = "OK";
    if(!result){
        status = "BAD"
    }
    return {result,status};
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
    console.log(hist);
    if(hist.length === 0){
        let result = await db.find({}).limit(5);
        console.log(result)
        return result
    }
    let comments = [];
    for(let i in hist){
        let comm = await commdb.find({
            "email" :  email,
            "paper_id" : hist[i]['paper_id'],
        })
        console.log('does this work');
        for (let j in comm[0]['comments']){
           comments.push(comm[0]['comments'][j])
        }
    }
    console.log("these are comments");
    console.log(comments);
    if(comments.length === 0){
        let hist_keywords = [];
        for(let i in hist){
            let paper = await db.find({
                "paper_id" : hist[i]['paper_id']
            })
            for(let i in paper['keywords']){
                hist_keywords.push(paper['keywords'][i])
            }
        }
        let dbresult = await db.find({
            "keywords" : {
                "$in" : keyword_values
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
    
    let status = "OK";
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
    let result = db.find({
        "email" : email
    }).sort({'timestamp' : '-1'}).limit(5);
    return result;
};

export { getPaperPath, getPapers , recPaper , getRec};
