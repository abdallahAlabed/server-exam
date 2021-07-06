const fav = require('../models/Fav');

function addDrinks(req, res) {

const {strDrink,strDrinkThumb,idDrink }=req.body;
fav.find({name:strDrink},(err,data)=>{
   if(data.length==0){
        const favname = new fav({
            strDrink ,
            strDrinkThumb,
            idDrink,
        });
        favname.save();
}else{
    console.log("هوه للشبع");
} 
})





}
module.exports=addDrinks;