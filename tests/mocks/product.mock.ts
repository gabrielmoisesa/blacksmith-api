const body = {
  name: 'Product 1',
  price: '10 peças de ouro',
  orderId: 1,
};

const response = {
  id: 1,
  name: body.name,
  price: body.price,
}

export default {
  body,
  response,
}