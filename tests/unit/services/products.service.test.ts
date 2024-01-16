import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import ProductService from '../../../src/services/product.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('Create', function() {
    it('Should create a product and return the created product', async function () {
      const productBody = {
        name: 'Product 1',
        price: '10 peças de ouro',
        orderId: 1,
      };
      const mockCreatedProduct = ProductModel.build({id: 1, ...productBody});
      sinon.stub(ProductModel, 'create').resolves(mockCreatedProduct);

      const productReturn = await ProductService.create(productBody);

      expect(productReturn).to.be.deep.equal({
        id: 1,
        name: productBody.name,
        price: productBody.price,
      })
    });
  })
}); 
