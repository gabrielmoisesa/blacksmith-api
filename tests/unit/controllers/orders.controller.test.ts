import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { NextFunction, Request, Response } from 'express';
import orderMock from '../../mocks/order.mock';
import orderService from '../../../src/services/order.service';
import orderController from '../../../src/controllers/order.controller'

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('Get All', function() {
    it('Should return all orders with status 200', async function () {
      sinon.stub(orderService, 'getAll').resolves({ status: 'OK', data: orderMock.findAllResponse });

      await orderController.getAll(req, res, next);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(orderMock.findAllResponse);
    })
  })
});
