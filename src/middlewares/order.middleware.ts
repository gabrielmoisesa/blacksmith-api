import { RequestHandler } from 'express';
import orderSchema from './schemas/order.schema';

const validateBody: RequestHandler = (req, res, next) => {
  const { error } = orderSchema.body.validate(req.body);
  if (error) {
    const statusCode = error.message.includes('must be') ? 422 : 400;
    return res.status(statusCode).json({ message: error.message });
  }
  next();
};

export default {
  validateBody,
};