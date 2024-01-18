import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import jwtUtil from '../utils/jwt.util';

const login = async (username: string, password: string): 
Promise<ServiceResponse<Token>> => {  
  const user = await UserModel.findOne({ where: { username } });
  if (!user) return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };

  const isPasswordValid = await bcrypt.compare(password, user.dataValues.password);
  if (!isPasswordValid) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const token = jwtUtil.sign({ id: user.dataValues.id, username: user.dataValues.username });

  return { status: 'OK', data: { token } };
};

export default {
  login,
};