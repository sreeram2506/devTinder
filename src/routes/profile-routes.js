const express = require('express')
const profileRouter = express.Router()

const { userAuth } = require('../middlewares/middleware');

profileRouter.post("/profile", userAuth, async (req, res) => {
    try {
        const userdetails = req.user;
        res.send( userdetails )
    } catch(err) {
        res.status(500).send("Error", err.message)
    }
})

module.exports = profileRouter;