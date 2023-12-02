
// searchPaper string(searchterm) matching title in dbs
import { getPaperPath, getPapers , recPaper } from "../services/paperFunc.js"
import { addComments } from "../services/userFunc.js"

//serachPaper searching for paper based on filter in dbs from frontend   
const searchPaper = async (req, res) => {
    let searchTerm = req.query.keyword
    let filter = req.query.filter
    console.log(searchTerm)
    console.log(filter)
    if(!searchTerm){
        res.status(400).json("Invalid Input")
        return;
    }
    if(searchTerm.trim.length === 0){
       res.status(400).json("Invalid Input");
        return;
    }
    let possiblefilters = ['title','year','author'];
    if(!possiblefilters.includes(filter)){
        res.status(400).json("Invalid filter");
        return;
    }
    let result = await getPapers(searchTerm,filter);
    console.log(result)
    res.status(200).json(result);
    return;
};

//post
//addComment using email and comment based on email  from frontend
const addComment = async(req,res) => {
    let comment = req.body.comment;
    let email = req.body.email;
    if(!comment || !email){
        res.status(400).json("Invalid Input");
        return;
    }
    if(comment.trim.length === 0 || email.trim.length === 0){
        res.status(400).json("Invalid Input");
        return;
    }
    let result = await addComments(email,comment) ;
    if(!result){
        res.status(400).json("unsucessful");
        return;
    }
    res.status(200).json(result);
    return;
};

//get
//recommendPaper using email through history and comments
const recommendPaper = async(req,res) => {
    let email = req.body.email;
    if(!email){
        res.status(400).json("Invalid Input");
        return;
    }
    if(!email.trim.length === 0){
        res.status(400).json("Invalid Input");
        return;
    }
    let result = await recPaper(email);
    if(!result){
        res.status(400).json("unsucessful");
        return;
    }
    res.json(result);
    return;
};

//post
//addHist using emal and addHist based on email from frontend

// Send the paper matched according to the title sent as query param 
const sendPaper = (req, res) => {
  const paperTitle = req.query.title;

  if (!paperTitle) {
    res.status(400).json({ message: 'Paper title cannot be empty' })
        return;
  }

  if (paperTitle.trim.length === 0) {
    res.status(400).json({ message: 'Paper title cannot be empty' })
        return;
  }

  const paperPath = getPaperPath(paperTitle);
  res.sendFile(paperPath);
    return;
};

export {searchPaper, addComment, recommendPaper, sendPaper  };
