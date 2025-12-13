const jwt = require('jsonwebtoken');
const User = require('../models/user');
const userAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;   
        if (!token) {
           throw new Error("Access denied.invalid Token.");
        }
        const verified = await jwt.verify(token, 'DEVTinder@124');
        const { _id } = verified;
        const user = await User.findById(_id);
        req.user = user;
        next();
    } catch(err) {
        res.status(401).send("Unauthorized: " + err.message);
    }
}


module.exports = { userAuth };