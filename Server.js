require("dotenv").config();
const cors = require("cors");
const express = require("express");
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;
const mongoose= require('mongoose');
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
mongoose.connect(`${process.env.MONGODB_URI}/myFirstDatabase`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
///////////////////////////////////////////////////////////
  server.get("*", (req, res) => {
    res.status(404).send("not found");
  });
///////////////////////////////////////////////////////////
  




///////////////////////////////////////////////////////////
  server.listen(PORT, () => {
    console.log(`listing to port ${PORT}`);
  });
///////////////////////////////////////////////////////////
  