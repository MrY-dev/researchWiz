// searchPaper string(searchterm) matching title in dbs
import PaperSchema from "../models/PaperSchema"
const searchPaper = async (req, res) => {
    
    let search = req.query.keyword;
    let queryval = {title: req.query.keyword};

};

const addComment = () => {

};

const recommendPaper = () => {

};

// Send the paper matched according to the title sent as query param 
const sendPaper = (req, res) => {
  
};

export {searchPaper, addComment};
