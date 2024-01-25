import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should return all orders with status 200', async function () {
    const mockOrders = OrderModel.bulkBuild(orderMock.orders);
    sinon.stub(OrderModel, 'findAll').resolves(mockOrders);

    const response = await chai.request(app).get('/orders');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(orderMock.findAllResponse);
  });
});
