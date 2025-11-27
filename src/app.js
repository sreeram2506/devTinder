const express = require('express');

const app = express();


app.get("/",(req, res)=> {
    res.send('Hello World');
})


app.get("/test", (req, res) => {
    res.send('This is a test route');
});

app.get("/check", (req, res) => {
    res.send('This is a check route');
});

app.get("/sreeram", (req, res) => {
    res.send('Hello sreeram');
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});