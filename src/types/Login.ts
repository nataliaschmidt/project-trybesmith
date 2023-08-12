export type TokenPayload = {
  id: number;
  username: string;
};

export type Login = {
  username: string;
  password: string;
};

export type Token = {
  token: string
};