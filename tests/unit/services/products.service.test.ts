import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import ProductService from '../../../src/services/product.service';
import productMock from '../../mocks/product.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('Create', function() {
    it('Should create a product and return the created product', async function () {
      const mockCreatedProduct = ProductModel.build({id: 1, ...productMock.body});
      sinon.stub(ProductModel, 'create').resolves(mockCreatedProduct);

      const productReturn = await ProductService.create(productMock.body);

      expect(productReturn).to.be.deep.equal(productMock.response)
    });
  })
}); 
