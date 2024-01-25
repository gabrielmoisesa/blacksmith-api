import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import jwtUtil from '../../../src/utils/jwt.util';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /orders', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Should create and return an order with success', async function () {
    const mockCreatedOrder = OrderModel.build(orderMock.orders[0]);
    const mockUser = UserModel.build({
      id: 1,
      username: 'username',
      vocation: 'mage',
      level: 1,
      password: 'password',
    });
    sinon.stub(jwtUtil, 'verify').returns({ id: 1, username: 'username' });

    sinon.stub(UserModel, 'findOne').resolves(mockUser);
    sinon.stub(OrderModel, 'findOne').resolves(mockCreatedOrder);
    sinon.stub(OrderModel, 'create').resolves(mockCreatedOrder);
    sinon.stub(ProductModel, 'update').resolves();

    const response = await chai
      .request(app)
      .post('/orders')
      .set('authorization', 'Bearer token')
      .send(orderMock.body);

    expect(response.status).to.be.equal(201);
  });
});
