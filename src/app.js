const express = require('express');

const app = express();

app.use("/user", (req, res, next)=> {
    //Route Handler
    next();
    // res.send("Route Handler 1");
}, 
(req, res, next) => {
    //Route Handler 2
    // res.send("Route Handler 2");
    next();
}, 
(req, res, next) => {
    //Route Handler 3
    // res.send("Route Handler 3");
    next();
}, (req, res, next) => {
    //Route Handler 4
    // res.send("Route Handler 4");
    res.send("Final Response from Route Handler 4"); 
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});