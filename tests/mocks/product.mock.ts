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

const products = {
  id: 1,
  ...body,
}

export default {
  body,
  createdResponse,
  products,
}