import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { addHistory ,getHistory, getName, addUser , checkUser} from "../services/userFunc.js"

dotenv.config();

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
    try {
        const { name, email, password } = req.body;
        await addUser(name, email, password);
        res.status(200).json('User created successfully' );
    } catch (err) {
        console.error(err);
        res.status(400).json('Could not create user due to some issue.');
    }
}

const loginUser = async(req,res) => {
    const { email, password } = req.body;
    try {
        await checkUser(email, password);

        const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
            expiresIn: '1h',
          });
        res.status(200).json({token});
    } catch (err) {
        console.error(err);
        res.status(400).json('Could not login user due to some issue.');
    }
}

const neoCred = async(req, res) => {
    const user = process.env.NEO_USER
    const password = process.env.NEO_PASS
    res.status(200).json({user, password})
}
export { getHist , addHist , signupUser , loginUser, neoCred , getUserName}
