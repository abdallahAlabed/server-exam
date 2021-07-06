const fav = require('../models/Fav');
function updateDrink(req, res){
    let {strDrink,strDrinkThumb,idDrink}=req.body
    fav.updateOne({idDrink},(err,data)=>{
        fav.find({}, (err, data) => {
            res.send(data);
        })
    
    })

}
module.exports = updateDrink;
