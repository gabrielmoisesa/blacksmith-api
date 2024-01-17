import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';
import productMock from '../../mocks/product.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('Get All', function() {
    it('Should return all products', async function () {
      const mockProducts = [ProductModel.build(productMock.products)];
      sinon.stub(ProductModel, 'findAll').resolves(mockProducts);

      const productServiceReturn = await productService.getAll();

      expect(productServiceReturn.status).to.be.equal('OK');
      expect(productServiceReturn.data).to.be.deep.equal(mockProducts);
    });
  })

  describe('Create', function() {
    it('Should create a product and return the created product', async function () {
      const mockCreatedProduct = ProductModel.build({id: 1, ...productMock.body});
      sinon.stub(ProductModel, 'create').resolves(mockCreatedProduct);

      const productServiceReturn = await productService.create(productMock.body);

      expect(productServiceReturn).to.be.deep.equal(productMock.createdResponse)
    });
  })
}); 
