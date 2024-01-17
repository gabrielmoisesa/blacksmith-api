import { Product } from "../../src/types/Product";
import { ServiceResponse } from "../../src/types/ServiceResponse";

const body = {
  name: 'Product 1',
  price: '10 peças de ouro',
  orderId: 1,
};

const createdResponse: ServiceResponse<Omit<Product, 'orderId'>> = {
  status: 'CREATED',
  data: {
    id: 1,
    name: body.name,
    price: body.price,
  }
}

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '10 peças de ouro',
    orderId: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    price: '20 peças de ouro',
    orderId: 1,
  },
  {
    id: 3,
    name: 'Product 3',
    price: '30 peças de ouro',
    orderId: 1,
  },
]

const getAllResponse = {
  status: 'OK',
  data: products,
}

export default {
  body,
  createdResponse,
  products,
  getAllResponse,
}