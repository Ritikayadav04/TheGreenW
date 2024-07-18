const {db1 ,signindb } =require ("../backend/db")
const {generateAccessToken, verifyAccessToken} = require('../tokenGeneration/ jwtToken')

const home = async(req,res)=>{
try {
console.log(req.body)
const token = generateAccessToken(req.body);
res.send({token});

}
catch (error) {
res.status(400).send("Internal server error1");
}
}
const signup = async(req,res) =>{
    console.log(req.body);
    const response = await db1(req.body);
    res.send(response);
}
const signin = async(req,res) =>{
    console.log(req.body);
    const response = await signindb(req.body);
    res.json({msg});
}
module.exports={home,signup,signin};



