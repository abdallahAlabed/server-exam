require("dotenv").config();
const cors = require("cors");
const express = require("express");
const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const getDrinks =require('./controllers/DrinksGetr');
const addDrinks =require('./controllers/AddDrinks');
const getFavDrinks =require('./controllers/GetFavDrinks');
const deleteDrinks =require('./controllers/DeleteDrinks');
const updateDrink =require('./controllers/UpdateDrink');





///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
mongoose.connect(`${process.env.MONGODB_URI}/exam`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
///////////////////////////////////////////////////////////
  server.get("*", (req, res) => {
    res.status(404).send("not found");
  });
///////////////////////////////////////////////////////////
server.get("/getFavDrinks",getFavDrinks);
///////////////////////////////////////////////////////////
server.get("/getDrinks",getDrinks);
///////////////////////////////////////////////////////////
server.post("/addDrinks",addDrinks);
///////////////////////////////////////////////////////////
server.delete("/addDrinks/:id",deleteDrinks);
///////////////////////////////////////////////////////////
server.put("/addDrinks",updateDrink);
// ///////////////////////////////////////////////////////////
  server.listen(PORT, () => {
    console.log(`listing to port ${PORT}`);
  });
// ///////////////////////////////////////////////////////////
