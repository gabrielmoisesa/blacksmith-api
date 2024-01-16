import { RequestHandler } from 'express';
import productService from '../services/product.service';

const create: RequestHandler = async (req, res) => {
  const created = await productService.create(req.body);
  res.status(201).json(created);
};

export default {
  create,
};