const express = require("express");
const route = require('./router/route1');
//const { signup ,signin} = require("./controller/controller1");
//const router = require('./router/route2')
//const router = require('./router/route3')
// const MongoClient=require('mongodb').MongoClient
const app = express()
const port = 4000;

app.use(express.json());
app.use('/',route);

//app.get("/", async (req, res) => {
  // const filter = {};
  // const client = await MongoClient.connect(
  //   'mongodb://localhost:27017/'
  // );
  // const coll = client.db('MyDb').collection('user');
  // const cursor = coll.find(filter);
  // const result = await cursor.toArray();
  // await client.close();

 


app.listen(4000, () => {
  console.log('Example app listening on port 4000');
});
