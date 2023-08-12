import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';


chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('ao fazer uma requisição retorna a lista de pedidos com o id dos produtos', async () => {
    sinon.stub(OrderModel, 'findAll').resolves()
  
  
  const httpResponse = await chai
        .request(app)
        .get('/orders')

        console.log(httpResponse.body);
        
  
        expect(httpResponse.status).to.equal(200);
      })
});
