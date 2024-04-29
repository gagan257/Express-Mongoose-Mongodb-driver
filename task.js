const { dbConnection } = require("./db");

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection("Users");
    const findResult = await collection.find().toArray();
    console.log(findResult);
  } catch (err) {
    console.error(err);
  }
}

main();
