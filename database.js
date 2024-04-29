const { MongoClient: mongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const dbName = "myDatabase";

const client = new mongoClient(url);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to the database");
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { connectToDatabase };
