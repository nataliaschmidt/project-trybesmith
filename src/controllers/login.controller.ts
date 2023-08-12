import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import loginService from '../services/login.service';

const loginUser = async (req: Request, res: Response):Promise<Response> => {
  try {
    const { username, password } = req.body;
    const login = { username, password };
    if (!username || !password) {
      return res.status(400).json({ message: '"username" and "password" are required' });
    }

    const { status, data } = await loginService.loginUser(login);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export default {
  loginUser,
};