const express = require("express");
const app = express();

const { connectToDatabase } = require("./database");

// GET METHOD

app.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("Users");
    const users = await collection.find().toArray();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching users");
  }
});

// POST METHOD

app.post("/users", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("Users");
    let result = collection.insertOne({ name: "John Sharma", age: 30 });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching users");
  }
});

// PUT METHOD

app.put("/users", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("Users");
  let singleData = collection.updateOne(
    { name: "John Sharma" },
    { $set: { age: 41, name: "John Kumar" } }
  );
});

// DELETE METHOD

app.delete("/users/:name", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("Users");
  const username = req.params.name;
  collection.deleteOne({ name: username });
  res.send("User deleted successfully");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
