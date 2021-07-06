
const mongoose= require('mongoose');

const favMod = new mongoose.Schema(
    {
    strDrink: String,
    strDrinkThumb: String,
    idDrink: String,
},{
    timestamps:true
}
);


const fav = mongoose.model("Favers",favMod);
module.exports= fav;