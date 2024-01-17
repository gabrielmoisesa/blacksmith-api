import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import loginService from '../../../src/services/login.service';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('Login', function () {
    it('Should return UNAUTHORIZED and a message when username is invalid', async function () {
      const mockUser = null;
      sinon.stub(UserModel, 'findOne').resolves(mockUser);

      const loginServiceReturn = await loginService.login('invalidUsername', 'password');

      expect(loginServiceReturn.status).to.be.equal('UNAUTHORIZED');
      expect(loginServiceReturn.data).to.be.deep.equal({ message: 'Username or password invalid' });
    })

    it('Should return UNAUTHORIZED and a message when password is invalid', async function () {
      const mockUser = UserModel.build({ id: 1, username: 'username', password: 'password', vocation: 'tester', level: 1 });
      sinon.stub(UserModel, 'findOne').resolves(mockUser);

      const loginServiceReturn = await loginService.login('username', 'invalidPassword');

      expect(loginServiceReturn.status).to.be.equal('UNAUTHORIZED');
      expect(loginServiceReturn.data).to.be.deep.equal({ message: 'Username or password invalid' });
    })

    it('Should return OK and a token when username and password are valid', async function () {
      const mockUser = UserModel.build({ id: 1, username: 'username', password: 'password', vocation: 'tester', level: 1 });
      sinon.stub(UserModel, 'findOne').resolves(mockUser);
      sinon.stub(bcrypt, 'compare').resolves(true);
      sinon.stub(jwt, 'sign').resolves('any-token');

      const loginServiceReturn = await loginService.login('username', 'password');

      expect(loginServiceReturn.status).to.be.equal('OK');
      expect(loginServiceReturn.data).to.have.property('token');
    })
  })
});
