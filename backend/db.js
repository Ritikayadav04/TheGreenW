const { MongoClient  } =require ('mongodb');
const db1 =async (data) =>{
    try{
        const client = await MongoClient.connect(
             'mongodb://localhost:27017/'
        );
    

    const coll = client.db('project1').collection("signup");
    const olduser = coll.findOne({email:data.email});
    if(olduser){
        return "user already exist"
    }

    const cursor =await coll.insertOne(data);
    client.close();
    return "Message: Registration Done";
    }catch (error){
        return "Internal Server Error";
    }
}
const signdb =async (data)=>{
    try{
        const client =await MongoClient.connect(
            'mongodb://localhost:27017/'
        );
        const coll = client.db("project1").collection('signup');
        const cursor =await coll.findOne({email:data.email});
        client.close();
        if((data.email ==cursor.email)&&(dara.password == cursor.password)){
            return "Login Ok"
        }
        else{
            return "Invalid Username or password";
        }
    }catch(error){
        console.log("Internal Server Error")
    }
}
module.exports ={db1,signdb};
