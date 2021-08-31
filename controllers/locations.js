const Location = require('../model/location');
exports.getLocations = (req, res) => {
    Location.find()
    .then(
        response => {
            res.status(200).json({ message: 'Locations fetched successfully', Locations : response })
        }
    ).catch(err => console.log(err))
}