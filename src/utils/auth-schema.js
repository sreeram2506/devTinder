const Joi = require('joi');

profileEditSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30),
  firstName: Joi.string().max(50),
  lastName: Joi.string().max(50),
  email: Joi.string().email(),
  age: Joi.number().integer().min(18).max(100)
}).unknown(false);

passwordSchema = Joi.object({
  password: Joi.string().min(6).max(128).required()
}).unknown(false);

module.exports = {
  profileEditSchema,
  passwordSchema
}