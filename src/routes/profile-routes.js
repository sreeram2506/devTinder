const express = require('express')
const profileRouter = express.Router()
const User = require('../models/user');

const { userAuth } = require('../middlewares/middleware');
const { validateSchema } = require('../utils/validator');
const { profileEditSchema } = require('../utils/auth-schema');
const { hashPassword } = require('../utils/validator');

profileRouter.post("/profile", userAuth, async (req, res) => {
    try {
        const userdetails = req.user;
        res.send( userdetails )
    } catch(err) {
        res.status(500).send("Error", err.message)
    }
})

profileRouter.patch(
  "/profile/edit",
  validateSchema(profileEditSchema),
    userAuth,
  async (req, res) => {
    try {
      const { _id: userId } = req.user;
      const userdetails = req.body; 

      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }

     
      Object.keys(userdetails).forEach(key => {
        user[key] = userdetails[key];
      });

  
      await user.save();

      res.status(200).json({
        message: "Profile updated successfully",
        data: user,
      });
    } catch (err) {
      res.status(400).json({ error: "ERROR", message: err.message });
    }
  }
);

profileRouter.patch('/profile/update/password', userAuth, async (req, res) => {
    try {
        const { _id: userId } = req.user;
        const { password } = req.body;
        const user = await User.findById(userId);
        if(!user) {
            throw new Error("User not found");
        }
        const hashedPassword = await hashPassword(password);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ message: "Password updated successfully" });
        
    } catch(err) {
        res.status(500).send("Error", err.message)
    }
});
module.exports = profileRouter;