const mongoose = require("mongoose");
//Call dotenv
require("dotenv").config();

//Env for mongo db must have user, password and name of database

const CONNECTION_URL = process.env.MONGODB_URI;

//Connecto to DB
function connection() {
  mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connection;
