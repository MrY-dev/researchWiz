// searchPaper string(searchterm) matching title in dbs
import {getPapers} from "../services/paperFunc"
const searchPaper = async (req, res) => {
    let searchTerm = req.query.keyword
    if(!searchTerm){
	res.json("Invalid Input").status(400);
    }
    if(searchTerm.trim.length() === 0){
	res.json("Invalid Input").status(400);
    }
    let result = await getPapers(searchTerm);
    res.json(result).status(200);
};

const addComment = () => {

};

const recommendPaper = () => {

};

// Send the paper matched according to the title sent as query param 
const sendPaper = (req, res) => {
  
};

export {searchPaper, addComment};
