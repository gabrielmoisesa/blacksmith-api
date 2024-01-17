import joi from 'joi';

const body = joi.object({
  name: joi.string().min(3).required(),
  price: joi.string().min(3).required(),
  orderId: joi.number().required(),
});

export default {
  body,
};