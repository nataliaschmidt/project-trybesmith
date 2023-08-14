import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import orderMock from '../../mocks/order.mock';
import jwt from 'jsonwebtoken';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('ao não enviar um token retorna um erro', async () => {

    const httpResponse = await chai
      .request(app)
      .post('/orders')
      .set('Authorization', '')
      .send(orderMock.createProductvalid);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: "Token not found" });
  });

  it('ao enviar um token inválido retorna um erro', async () => {

    const httpResponse = await chai
      .request(app)
      .post('/orders')
      .set('Authorization', '123')
      .send(orderMock.createProductvalid);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: "Invalid token" });
  });

  it('ao não enviar o campo userId retorna um erro', async () => {

    sinon.stub(jwt, 'verify').resolves(orderMock.tokenPayload)

    const httpResponse = await chai
      .request(app)
      .post('/orders')
      .send(orderMock.noUserId)
      .set('Authorization', loginMock.token);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"userId" is required' });
  });

  it('ao não enviar o campo productId retorna um erro', async () => {

    sinon.stub(jwt, 'verify').resolves(orderMock.tokenPayload)
    const userInstance = UserModel.build(orderMock.findUser);
    sinon.stub(UserModel, 'findOne').resolves(userInstance)

    const httpResponse = await chai
      .request(app)
      .post('/orders')
      .send(orderMock.noproductId)
      .set('Authorization', loginMock.token);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: "\"productIds\" is required" });
  });

  it('ao não enviar o campo userId com o tipo number retorna um erro', async () => {

    sinon.stub(jwt, 'verify').resolves(orderMock.tokenPayload)
    const userInstance = UserModel.build(orderMock.findUser);
    sinon.stub(UserModel, 'findOne').resolves(userInstance)

    const httpResponse = await chai
      .request(app)
      .post('/orders')
      .send(orderMock.userIdNoNumber)
      .set('Authorization', loginMock.token);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: "\"userId\" must be a number" });
  });

  it('ao não enviar o campo productId com o tipo array retorna um erro', async () => {

    sinon.stub(jwt, 'verify').resolves(orderMock.tokenPayload)
    const userInstance = UserModel.build(orderMock.findUser);
    sinon.stub(UserModel, 'findOne').resolves(userInstance)

    const httpResponse = await chai
      .request(app)
      .post('/orders')
      .send(orderMock.productIdNoArray)
      .set('Authorization', loginMock.token);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: "\"productIds\" must be an array" });
  });

  it('ao não encontrar um usuário retorna um erro', async () => {

    sinon.stub(jwt, 'verify').resolves(orderMock.tokenPayload)
    // const userInstance = UserModel.build(orderMock.findUser);
    sinon.stub(UserModel, 'findOne').resolves(null)

    const httpResponse = await chai
      .request(app)
      .post('/orders')
      .send(orderMock.userNotFound)
      .set('Authorization', loginMock.token);

    expect(httpResponse.status).to.equal(404);
    expect(httpResponse.body).to.be.deep.equal({ message: "\"userId\" not found" });
  });

  it('ao não encontrar um usuário retorna um erro', async () => {

    sinon.stub(jwt, 'verify').resolves(orderMock.tokenPayload)
    const userInstance = UserModel.build(orderMock.findUser);
    sinon.stub(UserModel, 'findOne').resolves(userInstance)

    const httpResponse = await chai
      .request(app)
      .post('/orders')
      .send(orderMock.productIdEmptyArray)
      .set('Authorization', loginMock.token);

    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: "\"productIds\" must include only numbers" });
  });

  it('ao cadastrar um produto corretamente retorna status 201', async () => {

    sinon.stub(jwt, 'verify').resolves(orderMock.tokenPayload)
    const userInstance = UserModel.build(orderMock.findUser);
    sinon.stub(UserModel, 'findOne').resolves(userInstance)

    const httpResponse = await chai
      .request(app)
      .post('/orders')
      .send(orderMock.createProductvalid)
      .set('Authorization', loginMock.token);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(orderMock.createProductvalid);
  });

});
