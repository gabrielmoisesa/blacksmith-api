import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('should return all products with status 200', async function () {
    const mockProducts = ProductModel.bulkBuild([productMock.products]);
    sinon.stub(ProductModel, 'findAll').resolves(mockProducts);

    const response = await chai.request(app).get('/products');

    expect(response.status).to.be.equal(200);
  });
});
