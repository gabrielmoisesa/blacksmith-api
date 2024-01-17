import { RequestHandler } from 'express';
import userService from '../services/user.service';
import httpMap from '../utils/httpMap';

const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
  const { status, data } = await userService.login(username, password);
  return res.status(httpMap(status)).json(data);
};

export default {
  login,
};