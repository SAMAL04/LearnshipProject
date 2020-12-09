const mongoose = require("mongoose");
const uri =
  "mongodb+srv://sathiya:sathiya@cluster0.cjoti.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("MongoDB Connection error");
  console.error(error);
});

module.exports = db;
