import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order, OrderResponse } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

const getAll = async (): Promise<ServiceResponse<OrderResponse[]>> => {
  const orders = await OrderModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        foreignKey: 'orderId',
        attributes: ['id'],
      },
    ],
  });

  const ordersFormatted = orders.map((order) => {
    const orderFormatted = order.toJSON() as Order;
    const productIds = (orderFormatted.productIds || []).map((product) => product.id);
    return { ...orderFormatted, productIds };
  });

  return { status: 'OK', data: ordersFormatted };
};

export default {
  getAll,
};