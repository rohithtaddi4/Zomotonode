const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locations');
const mealtypeController = require('../controllers/mealtypes');
const restaurantController = require('../controllers/restaurants');
const userController = require('../controllers/user')
const itemController = require('../controllers/items')
const orderController = require('../controllers/orders')
const paymentController = require('../controllers/payment')

router.get('/mealtypes', mealtypeController.getMealtypes);
router.get('/locations', locationController.getLocations);
router.get('/restaurantsbylocation/:locationId', restaurantController.getRestaurantsByLocation);
router.post('/filter',restaurantController.filterRestaurant);
router.post('/userregistartion',userController.createUserAccount);
router.post('/login',userController.getUserByLogin);
router.get('/restaurantdetails/:restId', restaurantController.getRestaurantsById);
router.get('/menuItems/:restId', itemController.getMenuitemsByrestID);
router.post('/orders',orderController.postOrderdata);
router.get('/ordersByuser/:userID',orderController.getOrderdata);
router.post('/payment',paymentController.payment);
router.post('/callback', paymentController.callback);


module.exports = router;