import getPaperPath from "../services/paperFunc";

const searchPaper = async (req, res) => {

};

const addComment = () => {

};

const recommendPaper = () => {

};

// Send the paper matched according to the title sent as query param 
const sendPaper = (req, res) => {
  const paperTitle = req.query.title;

  const paperPath = getPaperPath(paperTitle);

  res.sendFile(paperPath);
};

export {searchPaper, addComment, recommendPaper, sendPaper};
