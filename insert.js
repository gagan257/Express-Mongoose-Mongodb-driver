const { dbConnection } = require("./db");

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection("Users");

    const data = [
      { name: "John", age: 25 },
      { name: "Jane", age: 26 },
    ];

    const insertResult = await collection.insertMany(data);
    console.log(insertResult);
  } catch (err) {
    console.error(err);
  }
}

main();
