import joi from 'joi';

const body = joi.object({
  productIds: joi.array().items(joi.number()).required(),
  userId: joi.number().required(),
});

export default {
  body,
};