// searchPaper string(searchterm) matching title in dbs
import PaperSchema from "../models/PaperSchema"
const searchPaper = async (req, res) => {
    
    let search = req.query.keyword;
    let queryval = {title: req.query.keyword};
    PaperSchema.
};

const recommendPaper = () => {

};

export {searchPaper, recommendPaper};
