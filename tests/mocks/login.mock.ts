const noUsernameBody = { username: '', password: 'secret' };
const noPasswordBody = { username: 'Legolas', password: '' };
const validUser = { username: 'Eddie', password: 'sortudo' };
const noExistingUser = { username: 'Frodo', password: 'secret' };
const existingUserWithWrongPassword = { username: 'Legolas', password: 'wrong_password' };
const hash = '$2a$10$52xZ.6jIhgc2gD7nl06o9O3b0bw6ErL5hNpB4xewmhXDjQmUqdPEC'

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJFZGRpZSIsImlhdCI6MTY5MTk2NzU0MH0.e4P-7JNcFe3po0ZXC695Bz2O7ThAYW5W_YtQGU5p55A'

const userWithHash = {
  id: 2,
  username: 'Eddie',
  vocation: 'Guerreiro',
  level: 8,
  password: hash,
}

export default {
  noUsernameBody,
  noPasswordBody,
  noExistingUser,
  userWithHash,
  existingUserWithWrongPassword,
  validUser,
  token,
}