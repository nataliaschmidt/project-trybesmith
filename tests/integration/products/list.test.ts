import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
it('ao fazer uma requisição retorna a lista de produtos', async () => {
  sinon.stub(ProductModel, 'findAll').resolves()


const httpResponse = await chai
      .request(app)
      .get('/products')

      expect(httpResponse.status).to.equal(200);
    })
});
