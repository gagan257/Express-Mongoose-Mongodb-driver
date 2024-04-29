const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModal = mongoose.model("Users", UsersSchema);

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/myDatabase");
  console.log("Connected to the database");

  const newData = new UserModal({ name: "John Koay", age: 24 });

  await newData.save();
  console.log("Data saved successfully");
};

main();
