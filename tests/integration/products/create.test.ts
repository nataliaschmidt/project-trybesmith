import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

it('ao não enviar o campo name retorna um erro', async () => {
  const httpResponse = await chai
  .request(app)
  .post('/products')
  .send(productsMock.noProductNameBody);

expect(httpResponse.status).to.equal(400);
expect(httpResponse.body).to.be.deep.equal({ message: '"name" is required' });
})

it('ao não enviar o campo price retorna um erro', async () => {
  const httpResponse = await chai
  .request(app)
  .post('/products')
  .send(productsMock.noProductPriceBody);

expect(httpResponse.status).to.equal(400);
expect(httpResponse.body).to.be.deep.equal({ message: '"price" is required' });
})

it('ao não enviar o campo name como string retorna um erro', async () => {
  const httpResponse = await chai
  .request(app)
  .post('/products')
  .send(productsMock.noNameString);

expect(httpResponse.status).to.equal(422);
expect(httpResponse.body).to.be.deep.equal({ message: '"name" must be a string' });
});

it('ao não enviar o campo name com no mínimo 3 caracteres', async () => {
  const httpResponse = await chai
  .request(app)
  .post('/products')
  .send(productsMock.nameLengthLess);

expect(httpResponse.status).to.equal(422);
expect(httpResponse.body).to.be.deep.equal({ message: '"name" length must be at least 3 characters long' });
})

it('ao não enviar o campo price com no mínimo 3 caracteres', async () => {
  const httpResponse = await chai
  .request(app)
  .post('/products')
  .send(productsMock.priceLengthLess);

expect(httpResponse.status).to.equal(422);
expect(httpResponse.body).to.be.deep.equal({ message: '"price" length must be at least 3 characters long' });
})

it('ao enviar o cadastro de producto corretamente retorna o produco criado', async () => {
const productInstance = ProductModel.build(productsMock.createdProduct);
sinon.stub(ProductModel, 'create').resolves(productInstance)


  const httpResponse = await chai
  .request(app)
  .post('/products')
  .send(productsMock.createProductBody);

expect(httpResponse.status).to.equal(201);
expect(httpResponse.body).to.be.deep.equal(productsMock.resultCreatProduct);
})

});
