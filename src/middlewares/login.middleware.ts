import { RequestHandler } from 'express';
import loginSchema from './schemas/login.schema';

const validateBody: RequestHandler = (req, res, next) => {
  const { error } = loginSchema.body.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

export default {
  validateBody,
};