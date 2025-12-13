const express = require('express');

const app = express();
const { connectDatabase } = require('./config/database');
const successfulldbconnect = connectDatabase();
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth-routes');
const connectionRouter = require('./routes/connection-routes');
const profileRouter = require('./routes/profile-routes');

app.use(express.json());
app.use(cookieParser());

app.use('/',authRouter);
app.use('/', connectionRouter);
app.use('/', profileRouter);

successfulldbconnect.then(() => {
    console.log("Ready to accept requests after successful DB connection.");
    app.listen(3000, function () {
        console.log('Server is running on port 3000');
    }); 
}).catch((err) => {
    console.error("Error during DB connection:", err);
});