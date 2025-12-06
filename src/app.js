const express = require('express');

const app = express();
const { middleware } = require('./middlewares/middleware');
const { connectDatabase } = require('./config/database');
const successfulldbconnect = connectDatabase();
const User = require('./models/user');
const { validateSignupData } = require('./utils/validator');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const user = require('./models/user');
const { userAuth } = require('./middlewares/middleware');
successfulldbconnect.then(() => {
    console.log("Ready to accept requests after successful DB connection.");
    app.listen(3000, function () {
        console.log('Server is running on port 3000');
    }); 
}).catch((err) => {
    console.error("Error during DB connection:", err);
});
app.use(express.json());
app.use(cookieParser())
app.post('/signup', async (req, res)=> {

    const newUser = new User(req.body)
    try{
        const { isValid, errors } = validateSignupData(req.body);
        if (!isValid) {
            throw new Error("Invalid signup data: " + JSON.stringify(errors));
        }
        const { password } = req.body;
        const hashpassword = await hashpassword(password);
        newUser.password = hashpassword;
        await newUser.save()
        console.log("User saved successfully");
        res.send("User signed up successfully");
    } catch (err){
        console.log(err)
        res.status(400).send("unable to save user" + err.message);
    }
})

app.post('/login', async (req, res) => {
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

app.post("/profile", userAuth, async (req, res) => {
    try {
        const userdetails = req.user;
        res.send( userdetails )
    } catch(err) {
        res.status(500).send("Error", err.message)
    }
})

app.post( "/sendConnection", userAuth, async (req, res) => {
    try {
        const user = req.user;
        res.send(user.firstName + " Connection request sent successfully");
    } catch(err) {
        res.status(500).send("Error: " + err.message)
    }
});