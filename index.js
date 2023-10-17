const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// iBTCWd03PNorpC6o
// coffee-shop

const uri =
   "mongodb+srv://coffee-shop:iBTCWd03PNorpC6o@cluster0.ywsqr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

app.get("/", async (req, res) => {
   let database = await client.db("usersdb");
   const userCol = database.collection("users");
   const query = { _id: ObjectId("652e39d03da982aff7048375") };
   const result = userCol.findOne(query);
   res.send(result);
});

client.connect((err) => {
   if (err) {
      console.error(err);
      return false;
   }
   // connection to mongo is successful, listen for requests
   app.listen(PORT, () => {
      console.log("listening for requests");
   });
});
