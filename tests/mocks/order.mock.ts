const orders = [
  {
    id: 1,
    userId: 1,
  },
  {
    id: 2,
    userId: 2,
  },
  {
    id: 3,
    userId: 3,
  },
];

const findAllResponse = [
  {
    id: 1,
    userId: 1,
    productIds: []
  },
  {
    id: 2,
    userId: 2,
    productIds: []
  },
  {
    id: 3,
    userId: 3,
    productIds: []
  },
]

const body = { 
  userId: 1, productIds: [1, 2] 
}


export default {
  orders,
  findAllResponse,
  body,
}