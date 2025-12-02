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
app.use(express.json());
app.use(middleware);
app.post('/signup', async (req, res)=> {
    const newUser = new User(req.body)
    try{
        await newUser.save()
        console.log("User saved successfully");
        res.send("User signed up successfully");
    } catch (err){
        console.log(err)
        res.status(400).send("unable to save user" + err.message);
    }
})

app.get('/feed', async (req, res)=> {
    try{ 
        const users = await User.find({})
        res.send(users);
    }catch(err){
        console.log(err)
        res.status(400).send("unable to get users");
    }
})

app.get('/user', async (req, res)=> {
    try {
        const user = await User.find({ email: req.body.email})
        if (user.length) {
            res.send(user);
        } else {
            res.status(404).send("User not found");
        }
    }catch(err){
        console.log(err)
        res.status(400).send("unable to get user");
    }
}); 

app.delete('/user', async (req, res)=> {
    try { 
        const users = await User.find({})
        const id = users.find((user)=> {
            if (user.email === req.body.email) {
                return user.id;
            }
        })
        await User.findByIdAndDelete(id);
        res.send("User deleted successfully");
        
    } catch(err){
        console.log(err)
        res.status(400).send("unable to delete user");
    }
});

app.patch('/user', async (req, res)=> {
    try { 
        if (!Object.keys(req?.body).includes('email') || Object.keys(req.body).length === 0) {
            throw new Error("No emailID provided for update");
        }
        const users = await User.find({})
        const id = users.find((user)=> {
            if (user.email === req.body.email) {
                return user.id;
            }
        })
        console.log("Updating user with id:", id);
        await User.findByIdAndUpdate(id, req.body);
        res.send("User updated successfully");
        
    } catch(err){
        console.log(err)
        res.status(400).send("unable to update user: " + err.message);
    }
});
