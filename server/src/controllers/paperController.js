
// searchPaper string(searchterm) matching title in dbs
import { getPaperPath, getPapers , recPaper } from "../services/paperFunc.js"
import { addComments, addHistory } from "../services/userFunc.js"

//serachPaper searching for paper based on filter in dbs from frontend   
const searchPaper = async (req, res) => {
    let searchTerm = req.query.keyword
    let filter = req.query.filter
    if(!searchTerm){
        res.json("Invalid Input").status(400);
    }
    if(searchTerm.trim.length() === 0){
        res.json("Invalid Input").status(400);
    }
    let possiblefilters = ['title','year','author'];
    if(!possiblefilters.includes(filter)){
        res.json("Invalid filter").status(400);
    }
    let result = await getPapers(searchTerm,filter);
    res.json(result).status(200);
};

//post
//addComment using email and comment based on email  from frontend
const addComment = async(req,res) => {
    let comment = req.body.comment;
    let email = req.body.email;
    if(!comment || !email){
        res.json("Invalid Input").status(400);
    }
    if(comment.trim.length() === 0 || email.trim.length() === 0){
        res.json("Invalid Input").status(400);
    }
    let result = await addComments(email,comment) ;
    if(!result){
        res.json("unsucessful").status(400);
    }
    res.json(result).status(200);
};

//get
//recommendPaper using email through history and comments
const recommendPaper = async(req,res) => {
    let email = req.body.email;
    if(!email){
        res.json("Invalid Input").status(400);
    }
    if(!email.trim.length() === 0){
        res.json("Invalid Input").status(400);
    }
    let result = await recPaper(email);
    if(!result){
        res.json("unsucessful").status(400);
    }
    res.json(result).status(200);
};

//post
//addHist using emal and addHist based on email from frontend
const addHist = async(req,res) => {
    let history = req.body.history;
    let email = req.body.email;
    if(!history || !email){
        res.json("Invalid Input").status(400);
    }
    if(history.trim.length() === 0 || email.trim.length() === 0){
        res.json("Invalid Input").status(400);
    }
    let result = await addHistory(email,history);
    res.json(result).status(200);
}

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

export {searchPaper, addComment, recommendPaper, sendPaper, addHist };
