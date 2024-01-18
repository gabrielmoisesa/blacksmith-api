import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import orderService from '../../../src/services/order.service'
import ProductModel from '../../../src/database/models/product.model';

describe("OrdersService", function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe("Get All", function () {
    it("Should return all orders", async function () {
      const mockOrders = OrderModel.bulkBuild(orderMock.orders);
      sinon.stub(OrderModel, 'findAll').resolves(mockOrders);

      const orderServiceReturn = await orderService.getAll();

      expect(orderServiceReturn.status).to.be.equal('OK');
      expect(orderServiceReturn.data).to.be.deep.equal(orderMock.findAllResponse);
    });
  });

  describe("Create", function () {
    it("Should create an order", async function () {
      const mockOrder = OrderModel.build(orderMock.orders[0]);
      sinon.stub(OrderModel, 'findOne').resolves(mockOrder);
      sinon.stub(OrderModel, 'create').resolves(mockOrder);
      sinon.stub(ProductModel, 'update').resolves();

      const orderServiceReturn = await orderService.create(orderMock.body);

      expect(orderServiceReturn.status).to.be.equal('CREATED');
      expect(orderServiceReturn.data).to.be.deep.equal(orderMock.body);
    });

    it("Should return an error if user not found", async function () {
      sinon.stub(OrderModel, 'findOne').resolves(null);

      const orderServiceReturn = await orderService.create(orderMock.body);

      expect(orderServiceReturn.status).to.be.equal('NOT_FOUND');
      expect(orderServiceReturn.data).to.be.deep.equal({ message: '"userId" not found' });
    });
  })
});
