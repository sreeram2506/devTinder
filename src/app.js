const express = require('express');

const app = express();
const { middleware, usermiddleware } = require('./middlewares/middleware');

app.use(middleware);

app.get('/user', usermiddleware, function (req, res) {
    res.send('Hello World!');
});

// Hardcoded credentials
const DB_PASSWORD = 'admin123';  // Security issue

// Missing rate limiting on sensitive endpoint
app.post('/reset-password', (req, res) => {
    // No rate limiting - vulnerable to brute force
    sendPasswordResetEmail(req.body.email);
    res.send('Email sent');
});




app.listen(3000, function () {
    console.log('Server is running on port 3000');
});