const express = require('express');
const authRouter = express.Router();

const { validateSignupData, hashPassword } = require('../utils/validator');
const User = require('../models/user');

authRouter.post('/signup', async (req, res)=> {

    const newUser = new User(req.body)
    try{
        const { isValid, errors } = validateSignupData(req.body);
        if (!isValid) {
            throw new Error("Invalid signup data: " + JSON.stringify(errors));
        }
        const { password } = req.body;
        const hashpassword = await hashPassword(password);
        newUser.password = hashpassword;
        await newUser.save()
        console.log("User saved successfully");
        res.send("User signed up successfully");
    } catch (err){
        console.log(err)
        res.status(400).send("unable to save user" + err.message);
    }
})


authRouter.post('/login', async (req, res) => {
    try {
    const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("Email and password are required for login");
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send("Invalid credentials");
        }
        const isMatch = await user.verifyHash(password)
        if (!isMatch) {
            return res.status(404).send("Invalid  credsentials");
        }
        const token = await user.createJwt();
        res.cookie("token", token);
        res.send("Login successful", );
    } catch (err) {
        console.log(err);
        res.status(400).send("Unable to login: " + err.message);
    }
});

module.exports = authRouter;