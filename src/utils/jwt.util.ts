import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/TokenPayload';

const secret = process.env.JWT_SECRET || 'secret';

const sign = (payload: TokenPayload): string => jwt.sign(payload, secret, { expiresIn: '1h' });

const verify = (token: string): TokenPayload => {
  const data = jwt.verify(token, secret) as TokenPayload;
  return data;
};

export default {
  sign,
  verify,
};