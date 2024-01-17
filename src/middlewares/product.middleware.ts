import { RequestHandler } from 'express';
import productSchema from './schemas/product.schema';

const validateBody: RequestHandler = (req, res, next) => {
  const { error } = productSchema.body.validate(req.body);
  if (error) {
    const statusCode = error.message.includes('must be') ? 422 : 400;
    return res.status(statusCode).json({ message: error.message });
  }
  next();
};

export default {
  validateBody,
};