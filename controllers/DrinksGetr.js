const axios  = require("axios");
const { response } = require("express");



function getDrinks(req, res){
axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then((response)=>{
    res.send(response.data.drinks);
})

}





module.exports =getDrinks;