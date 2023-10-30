import PaperModel from "../models/PaperSchema"

const getPapers = async (searchTerm)=>{
    const db = PaperModel;
    let result = await db.find({title : {$regex: `${searchTerm}`}});
    return result;
};

const getPaperPath = async (paperTitle) => {
  const paperDetail = await PaperModel.find({ title: paperTitle });

  return paperDetail.path;
};

export default { getPaperPath, getPapers };
