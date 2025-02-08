const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
//route imports

dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(cors());

connectDB();

// routes

module.exports = app;
