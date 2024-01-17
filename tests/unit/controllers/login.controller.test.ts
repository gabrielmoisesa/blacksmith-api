import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { NextFunction, Request, Response } from 'express';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller'

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('Login', function() {
    it('Should return the token with status 200', async function () {
      req.body = { username: 'username', password: 'password' };
      sinon.stub(loginService, 'login').resolves({ status: 'OK', data: { token: 'valid-token' } })

      await loginController.login(req, res, next);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ token: 'valid-token' });
    })
  })
});
