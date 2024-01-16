import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import { ServiceResponse } from '../types/ServiceResponse';

const getAll = async (): Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const orders = await OrderModel.findAll();
  return { status: 'OK', data: orders };
};

export default {
  getAll,
};