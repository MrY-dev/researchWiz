import PaperModel from "../models/PaperSchema"

const getPapers = async (searchTerm)=>{
    const db = PaperModel;
    let result = await db.find({title : {$regex: `${searchTerm}`}});
    return result;
};
export { getPapers }
