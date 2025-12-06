const express = require('express');
const connectionRouter = express.Router();

const { userAuth } = require('../middlewares/middleware');

connectionRouter.post( "/sendConnection", userAuth, async (req, res) => {
    try {
        const user = req.user;
        res.send(user.firstName + " Connection request sent successfully");
    } catch(err) {
        res.status(500).send("Error: " + err.message)
    }
});

module.exports = connectionRouter;