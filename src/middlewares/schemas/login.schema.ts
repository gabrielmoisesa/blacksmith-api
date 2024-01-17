import joi from 'joi';

const body = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

export default {
  body,
};