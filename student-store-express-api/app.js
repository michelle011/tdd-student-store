const express = require("express"); // look inside node modules dir and store express in here
// const morgan = require("morgan"); // morgan is just a logger, so allows us to log in app
const cors = require("cors"); // for hopscotch, etc. to see post

const { NotFoundError } = require("./utils/errors.js");

const app = express(); // creates new instance of exp app, and store in app
const Store = require("./routes/store.js");
const Orders = require("./routes/orders.js");

const logger = require("morgan");
app.use(cors());
app.use(logger("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

app.use("/store", Store);
app.use("/orders", Orders);

app.use((req, rest, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  if (!error.status) {
    currStatus = 500;
  } else {
    currStatus = error.status;
  }

  if (!error.message) {
    currMessage = "Something went wrong in the application";
  } else {
    currMessage = error.message;
  }

  return res.status(currStatus).json({
    error: { message: currMessage, status: currStatus },
  });
});

module.exports = app;
