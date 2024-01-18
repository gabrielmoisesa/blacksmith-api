import joi from 'joi';

const body = joi.object({
  productIds: joi.array().items(joi.number().required()).required().messages({
    'number.base': '"productIds" must include only numbers',
  }),
  userId: joi.number().required(),
});

export default {
  body,
};