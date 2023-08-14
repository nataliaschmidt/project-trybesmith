import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

it('ao fazer uma requisição retorna a lista de produtos', async () => {
  const productsInstance = ProductModel.bulkBuild(productsMock.productsListBuildMock);
  sinon.stub(ProductModel, 'findAll').resolves(productsInstance)


const httpResponse = await chai
      .request(app)
      .get('/products')

      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.be.deep.equal(productsMock.productList)
    })
});
