const restaurant = require('../model/restaurants');
exports.getRestaurantsByLocation = (req, res) => {
    const locationId = req.params.locationId;
    restaurant.find({location_id : locationId })
    .then(
        response => {
            res.status(200).json({ message: 'Restaurants fetched successfully', restaurants : response })
        }
    ).catch(err => console.log(err))
}

exports.filterRestaurant = (req, res) => {
let { location, cuisine, mealtype, lcost, hcost, sort, page } = req.body;
page = page ? page : 1;
sort = sort ? sort : 1;

let payload = {};

if(mealtype) {
    payload = {
        mealtype_id: mealtype
    }
}
if(location) {   //this is not required for filter page but only for assignment purpose
    payload = {
        location_id: location        
    }
}
if(mealtype && location) {
    payload = {
        mealtype_id: mealtype,
        location_id: location        
    }
}
if(mealtype && cuisine) {
    payload = {
        mealtype_id: mealtype,
        "cuisine.id": { $in: cuisine }
    }
}
if(mealtype && lcost && hcost) {
    payload = {
        mealtype_id: mealtype,
        min_price: { $lte: hcost, $gte: lcost }
    }
}
if(mealtype && location && cuisine ) {
    payload = {
        mealtype_id: mealtype,
        location_id: location,
        "cuisine.id": { $in: cuisine }        
    }
}
if(mealtype && location && lcost && hcost) {
    payload = {
        mealtype_id: mealtype,
        location_id: location,
        min_price: { $lte: hcost, $gte: lcost }        
    }
}
if(mealtype && cuisine && lcost && hcost) {
    payload = {
        mealtype_id: mealtype,
        "cuisine.id": { $in: cuisine },
        min_price: { $lte: hcost, $gte: lcost }
    }
}


restaurant.find(payload).sort({min_price: sort}) //sorting
.then(
    response => {
        
        //pagination logic
        const s = page + (page - 1);  // var s to make look it simpler
        const filteredresponse = response.slice(s-1, s+1);
        var pageCount = [];
        if(response.length %2 != 0){
            response.length = response.length + 1;
        }
        var r = response.length/2;
        var p = 1;
        while(p <= r){
            pageCount.push(p);
            p++;
        }
        res.status(200).json({ message: 'Restaurants fetched successfully', pageCount, restaurants : filteredresponse })
    }
).catch(err => console.log(err))
}

exports.getRestaurantsById = (req, res) => {
    const restId = req.params.restId;
    restaurant.findOne({ _id : restId })
    .then(
        response => {
            res.status(200).json({ message: 'Restaurant fetched successfully', restaurants : response })
        }
    ).catch(err => console.log(err))
}