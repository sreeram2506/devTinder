const express = require('express');

const app = express();
const { middleware } = require('./middlewares/middleware');
const { connectDatabase } = require('./config/database');
const successfulldbconnect = connectDatabase();
const User = require('./models/user');

successfulldbconnect.then(() => {
    console.log("Ready to accept requests after successful DB connection.");
    app.listen(3000, function () {
        console.log('Server is running on port 3000');
    }); 
}).catch((err) => {
    console.error("Error during DB connection:", err);
});

app.use(middleware);
app.post('/signup', async (req, res)=> {
    const newUser = new User({
        firstName: "simran",
        lastName: "jayant",
        email: "simran.jayant@example.com",
        password: "password123"
    })
    try{
        await newUser.save()
        console.log("User saved successfully");
        res.send("User signed up successfully");
    } catch (err){
        console.log(err)
        res.status(400).send("unable to save user");
    }
})

