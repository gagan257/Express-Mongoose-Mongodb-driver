const { dbConnection } = require("./db");

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection("Users");

    const deleteResult = await collection.deleteMany({ name: "John" });
    console.log(deleteResult.deletedCount);
  } catch (err) {
    console.error(err);
  }
}

main();
