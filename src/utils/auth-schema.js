const Joi = require('joi');

profileEditSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30),
  firstName: Joi.string().max(50),
  lastName: Joi.string().max(50),
  email: Joi.string().email(),
  age: Joi.number().integer().min(18).max(100)
}).unknown(false);

module.exports = {
    profileEditSchema
}