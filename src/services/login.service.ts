import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwtUtil from '../auth/auth';
import { Login, Token } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';

const loginUser = async (login: Login): Promise<ServiceResponse<Token>> => {
  const user = await UserModel.findOne({ where: { username: login.username } });

  if (!user || !bcrypt.compareSync(login.password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = user.dataValues;
  const token = jwtUtil.createToken({ id, username });
  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  loginUser,
};