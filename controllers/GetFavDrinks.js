
const fav = require('../models/Fav');



function getFavDrinks(req, res) {
    fav.find({}, (err, data) => {
        res.send(data);
    })

}

module.exports = getFavDrinks;