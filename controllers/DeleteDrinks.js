const fav = require('../models/Fav');

function deleteDrinks(req, res){
    let id = req.params.id;
fav.deleteOne({idDrink:id},(err,data)=>{

    fav.find({}, (err, data) => {
        res.send(data);
    })

})

}














module.exports = DeleteDrinks;