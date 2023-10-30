
// searchPaper string(searchterm) matching title in dbs
import { getPaperPath, getPapers } from "../services/paperFunc.js"

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
  const paperTitle = req.query.title;

  if (!paperTitle) {
    res.status(400).json({ message: 'Paper title cannot be empty' })
  }

  if (paperTitle.trim.length() === 0) {
    res.status(400).json({ message: 'Paper title cannot be empty' })
  }

  const paperPath = getPaperPath(paperTitle);

  res.sendFile(paperPath);
};

export {searchPaper, addComment, recommendPaper, sendPaper};
