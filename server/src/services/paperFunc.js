import PaperModel from "../models/PaperSchema.js"
import HistModel from "../models/HistSchema.js"
import CommentModel from "../models/CommentSchema.js"
import keyword_extractor from  "keyword-extractor"


const getPapers = async (searchTerm,filter)=>{
    const db = PaperModel;
    let dbquery;
    dbquery[filter] = filter;
    let result = await db.papermodel.find({ dbquery : {$regex: searchTerm}});
    console.log("fromgetPaper")
    console.log(result)
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
        status = "bad";
    }
    return { dbresult , status };
};

export { getPaperPath, getPapers , recPaper};
