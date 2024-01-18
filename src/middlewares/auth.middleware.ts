import { RequestHandler } from 'express';
import UserModel from '../database/models/user.model';
import jwtUtil from '../utils/jwt.util';

const extractToken = (authorization: string) => authorization.split(' ')[1];

const authMiddleware: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(authorization);
  try {
    const decoded = jwtUtil.verify(token);
    const user = await UserModel.findOne({ where: { id: decoded.id } });
    if (!user) return res.status(401).json({ message: 'Invalid token' });
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;