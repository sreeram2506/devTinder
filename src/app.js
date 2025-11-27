const express = require('express');

const app = express();

app.use("/test", (req, res) => {
    res.send('This is a test route');
});

app.use("/users", (req, res) => {
    res.send('This is the users route');
});


app.get("/users", (req, res) => {
    res.send({
        'firstName': 'John',
        'lastName': 'Doe'
    });
});

app.post("/users", (req, res) => {
    res.send({
        'status': 'User created successfully'
    });
});

app.delete("/users", (req, res) => {
    res.send({
        'status': 'User deleted successfully'
    });
});

app.patch("/users", (req, res) => {
    res.send({
        'status': 'User updated successfully'
    });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});