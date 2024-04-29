const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbname = "myDatabase";

const dbConnection = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbname);
    return db;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = { dbConnection };
