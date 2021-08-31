const orders = require('../model/orders')

exports.postOrderdata = (req, res) => {
    const {placedBy, placedByUserID, placedOn, items, amount, restaurantId }=req.body;

    const orderdetails = {
     
     placedByUserID : placedByUserID,
    /* placedOn : placedOn,
     restaurantId : restaurantId,
     placedBy : placedBy, */
     items : items,
     amount : amount 
    }


    orders.insertMany(orderdetails)
    .then(
        response => {
            res.status(200).json({ message: 'Order added successfully',response })
        }
    ).catch(err => console.log(err))
}

exports.getOrderdata = (req, res) => {
    const userID = req.params.userID;
    orders.find({ placedByUserID : userID })
    .then(
        response => {
            res.status(200).json({ message: 'Orders fetched successfully', orders : response })
        }
    ).catch(err => console.log(err))
}