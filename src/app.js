const express = require('express');

const app = express();
const { middleware, usermiddleware } = require('./middlewares/middleware');

app.use(middleware);

app.get('/user', usermiddleware, function (req, res) {
    res.send('Hello World!');
});




app.listen(3000, function () {
    console.log('Server is running on port 3000');
});