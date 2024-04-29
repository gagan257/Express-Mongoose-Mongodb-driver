const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbname = "myDatabase";

// If error is comming while connecting then replace localhost to IP address

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db(dbname);
  const collection = db.collection("Users");

  const findResult = await collection.find().toArray();
  console.log(findResult);
}

main();
