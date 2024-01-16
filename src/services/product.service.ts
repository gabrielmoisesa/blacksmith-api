import { Model } from 'sequelize';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

const getAll = async (): Promise<Model<Product, ProductInputtableTypes>[]> => {
  const products = await ProductModel.findAll();
  return products;
};

const create = async (product: Omit<Product, 'id'>): Promise<Omit<Product, 'orderId'>> => {
  const createdProduct = await ProductModel.create({
    name: product.name,
    price: product.price,
    orderId: product.orderId,
  });

  const { id, name, price } = createdProduct.dataValues;

  return { id, name, price };
}; 

export default {
  getAll,
  create,
};