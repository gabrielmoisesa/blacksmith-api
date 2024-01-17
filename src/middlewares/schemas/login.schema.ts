import joi from 'joi';

const body = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
}).messages({
  'any.required': '"username" and "password" are required',
});

export default {
  body,
};