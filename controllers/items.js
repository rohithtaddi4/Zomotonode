const Item = require('../model/items');
exports.getMenuitemsByrestID = (req, res) => {
    const restId = req.params.restId;
    Item.find({restaurantId : restId })
    .then(
        response => {
            res.status(200).json({ message: 'Menu fetched successfully', items : response })
        }
    ).catch(err => console.log(err))
}
