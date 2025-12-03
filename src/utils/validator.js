
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
function validateSignupData(data) {
    const errors = {};
    if (!data.email || typeof data.email !== 'string' || !isEmail(data.email)) {
        errors.email = 'Invalid email address';
    }
    if (!data.password || typeof data.password !== 'string' || data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

function hashPassword(password) {
    return bcrypt.hash(password, 10)
        .then(hash => {
            console.log(`Hash: ${hash}`);
            return hash;
        })
        .catch(err => { throw new Error("Error in hashing password: " + err.message); });
}
module.exports = { validateSignupData, hashPassword };