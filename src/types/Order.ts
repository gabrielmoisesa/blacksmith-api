export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type OrderResponse = {
  id: number;
  userId: number;
  productIds: number[];
};

export type OrderBody = {
  userId: number;
  productIds: number[];
};