import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';

const secret = process.env.JWT_SECRET ?? 'secret';

const login = async (username: string, password: string): Promise<ServiceResponse<string>> => {  
  const user = await UserModel.findOne({ where: { username } });
  if (!user) return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };

  const isPasswordValid = await bcrypt.compare(password, user.dataValues.password);
  if (!isPasswordValid) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const token = jwt.sign({
    id: user.dataValues.id,
    username: user.dataValues.username,
  }, secret, { expiresIn: '1h' });

  return { status: 'OK', data: token };
};

export default {
  login,
};