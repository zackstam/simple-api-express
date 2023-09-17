

const HttpError = require('../interface/http-error');
const User = require('../models/User');


const all = async (req, res, next) => {
    try {
        const data = await User.findAll();
        return res.status(200).json({ message: 'success', data, });
    } catch (error) {
        const err = new HttpError(error.message, 4099, 400)
        return next(err)
    }
}



module.exports = {
    all,
}