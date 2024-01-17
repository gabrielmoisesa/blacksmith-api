import { RequestHandler } from 'express';
import httpMap from '../utils/httpMap';
import loginService from '../services/login.service';

const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  const { status, data } = await loginService.login(username, password);
  return res.status(httpMap(status)).json(data);
};

export default {
  login,
};