import { NextFunction, Request, Response } from 'express';
import jwtUtils from '../auth/auth';
import { TokenPayload } from '../types/Login';

const extractToken = (bearerToken: string): string => (bearerToken
  .includes(' ') ? bearerToken
    .split(' ')[1] : bearerToken);

const validateJwt = async (req: Request, res: Response, next: NextFunction) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);

  try {
    const payload: TokenPayload = jwtUtils.getPayload(token);
    
    req.body.payload = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateJwt;