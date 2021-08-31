const mealtypes = require('../model/mealtypes');
exports.getMealtypes = (req, res) => {
    mealtypes.find()
    .sort({meal_type:1})
    .then(
        response => {
            res.status(200).json({ message: 'Locations fetched successfully', mealtypes : response })
        }
    ).catch(err => console.log(err))
}