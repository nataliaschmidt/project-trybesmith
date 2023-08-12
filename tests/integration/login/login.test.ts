import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () {
  beforeEach(function () { sinon.restore(); });
  it('ao não enviar um username retorna um erro', async () => {
    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(loginMock.noUsernameBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it('ao não enviar um password retorna um erro', async () => {
    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(loginMock.noPasswordBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it('ao enviar um usuário inexistente retorna um erro', async () => {
    sinon.stub(UserModel, 'findOne').resolves(null);

    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(loginMock.noExistingUser);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: "Username or password invalid" });
  });

  it('ao enviar um usuário existente e uma senha errada retorna um erro', async () => {
    const userInstance = UserModel.build(loginMock.userWithHash);
    sinon.stub(UserModel, 'findOne').resolves(userInstance);

    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(loginMock.existingUserWithWrongPassword);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: "Username or password invalid" });
  });

  it('ao enviar um usuário e senha válidos retorna um token', async () => {
    const userInstance = UserModel.build(loginMock.userWithHash);
    sinon.stub(UserModel, 'findOne').resolves(userInstance);

    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(loginMock.validUser);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });

});
