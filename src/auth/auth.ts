import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/Login';

const secret = process.env.JWT_SECRET || 'yourSecret';

// const jwtConfig = { algorithm: 'HS256', expiresIn: '5d' };

const createToken = (payload: TokenPayload): string => jwt.sign(payload, secret);

const getPayload = (token: string): TokenPayload => jwt.verify(token, secret) as TokenPayload;

export default {
  createToken,
  getPayload,
};