import PaperModel from "../models/PaperSchema.js"

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

export { getPaperPath, getPapers };
