const express = require("express"); // look inside node modules dir and store express in here
const morgan = require("morgan"); // morgan is just a logger, so allows us to log in app
const cors = require("cors"); // for hopscotch, etc. to see post

const app = express(); // creates new instance of exp app, and store in app
const store = require("./routes/store");
const { storage } = require("./data/storage");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// app.get("/fail", (req, res, next) => {
//   const a = null;
//   console.log("fail");
//   try {
//     a.map();
//   } catch (e) {
//     const newError = new Error("Map failed :(");
//     newError.status = 999;
//     throw newError;
//   }
//   res.send("Fail");
// });

app.get("/", (req, res) => {
  res.send(storage.get("products").value());
});

app.use("/store", store);

module.exports = app;
