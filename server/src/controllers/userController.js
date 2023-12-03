import { addHistory ,getHistory, getName } from "../services/userFunc.js"

const addHist = async(req,res) => {
    let paperid = req.body['paper_id'];
    let email = req.body['email'];
    console.log(paperid)
    console.log(email)
    if(!paperid || !email){
        res.json("Invalid Input").status(400);
    }
    if(paperid.trim().length === 0 || email.trim().length === 0){
        res.json("Invalid Input").status(400);
    }
    let result = await addHistory(email,paperid);
    res.json(result).status(200);
}


const getHist = async(req,res) => {
    let email = req.query.email;
    if(!email || email.trim().length === 0){
        res.json("Invalid Input").status(400);
    }
    let result = await getHistory(email);
    res.json(result).status(200);
}

const getUserName = async(req, res) => {
    const email = req.query.email;
    if(!email || email.trim().length === 0){
        res.json("Invalid Input").status(400);
    }
    let result = await getName(email);
    res.json(result.name).status(200);
};

const signupUser = async(req,res) => {

}

const loginUser = async(req,res) => {

}

export { getHist , addHist , signupUser , loginUser }
