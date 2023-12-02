import {  addHistory ,getHistory } from "../services/userFunc.js"

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

const getHist = async(req,res) => {
    let email = req.query.email;
    if(!email || email.trim.length() === 0){
        res.json("Invalid Input").status(400);
    }
    let result = await getHistory(email);
    res.json(result).status(200);
}

export { getHist , addHist }
