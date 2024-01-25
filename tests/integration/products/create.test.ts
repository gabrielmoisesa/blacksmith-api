import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Should create and return a product with success', async function () {
    const mockCreatedProduct = ProductModel.build({
      id: 1,
      ...productMock.body,
    });

    sinon.stub(ProductModel, 'create').resolves(mockCreatedProduct);

    const response = await chai
      .request(app)
      .post('/products')
      .send(productMock.body);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({
      id: 1,
      name: productMock.body.name,
      price: productMock.body.price,
    });
  });
});
