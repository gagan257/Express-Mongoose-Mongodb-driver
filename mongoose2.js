const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDatabase");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

const Books = mongoose.model("Book", bookSchema);

const app = express();

// GET METHOD

app.get("/books", async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching books");
  }
});

// POST METHOD

app.use(express.json()); // Middkeware to parse JSON data

app.post("/books", async (req, res) => {
  console.log(req.body);
  try {
    const { title, author } = req.body;
    const newBook = new Books({ title, author });
    await newBook.save();
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching books");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
