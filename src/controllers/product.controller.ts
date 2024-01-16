import { RequestHandler } from 'express';
import productService from '../services/product.service';
import httpMap from '../utils/httpMap';

const getAll: RequestHandler = async (req, res) => {
  const { status, data } = await productService.getAll();
  res.status(httpMap(status)).json(data);
};

const create: RequestHandler = async (req, res) => {
  const { status, data } = await productService.create(req.body);
  res.status(httpMap(status)).json(data);
};

export default {
  getAll,
  create,
};