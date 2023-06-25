const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const productRouter = require("./routes/product/product.router");

const app = express();

//CORS
app.use(cors({ origin: "http://localhost:8000/" }));

//MORGAN MIDDLEWARE
app.use(morgan("combined"));

//FOR USING JSON
app.use(express.json());

//Connecting routes
app.get("/", (req, res) => {
  console.log("Main");
  res.send("Welcome");
});

app.use(productRouter);

module.exports = app;
