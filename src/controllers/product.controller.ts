import { RequestHandler } from 'express';
import productService from '../services/product.service';

const getAll: RequestHandler = async (req, res) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const create: RequestHandler = async (req, res) => {
  const created = await productService.create(req.body);
  res.status(201).json(created);
};

export default {
  getAll,
  create,
};