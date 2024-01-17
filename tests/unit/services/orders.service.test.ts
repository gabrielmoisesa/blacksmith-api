import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import orderService from '../../../src/services/order.service'

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
});
