import { RequestHandler } from 'express';
import orderService from '../services/order.service';
import httpMap from '../utils/httpMap';

const getAll: RequestHandler = async (req, res) => {
  const { status, data } = await orderService.getAll();
  res.status(httpMap(status)).json(data);
};

export default {
  getAll,
};