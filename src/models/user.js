const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        validate: {
            validator: function (v) {
            return /^[A-Za-z]+$/.test(v);   // only letters
            },
            message: (props) => `${props.value} is not a valid first name!`,
        },
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },  
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return validator.isEmail(v);
            },
            message: (props) => `${props.value} is not a valid email!`,
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024,
        default: "defaultpassword"
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);