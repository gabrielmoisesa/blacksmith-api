import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { NextFunction, Request, Response } from 'express';
import productService from '../../../src/services/product.service';
import productMock from '../../mocks/product.mock';
import productController from '../../../src/controllers/product.controller'
import ProductModel from '../../../src/database/models/product.model';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('Get All', function() {
    it('Should return all products with status 200', async function () {
      const mockProducts = [ProductModel.build(productMock.products)];
      sinon.stub(productService, 'getAll').resolves({ status: 'OK', data: mockProducts });

      await productController.getAll(req, res, next);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockProducts);
    });
  })

  describe('Create', function() {
    it('Should create and return the product with status 201', async function () {
      req.body = productMock.body;
      sinon.stub(productService, 'create').resolves(productMock.createdResponse);

      await productController.create(req, res, next);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(productMock.createdResponse.data);
    });
  })
});
