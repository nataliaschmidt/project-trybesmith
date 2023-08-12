const noUsernameBody = { username: '', password: 'secret' };
const noPasswordBody = { username: 'Legolas', password: '' };
const validUser = { username: 'Eddie', password: 'sortudo' };
const noExistingUser = { username: 'Frodo', password: 'secret' };
const existingUserWithWrongPassword = { username: 'Legolas', password: 'wrong_password' };
const hash = '$2a$10$52xZ.6jIhgc2gD7nl06o9O3b0bw6ErL5hNpB4xewmhXDjQmUqdPEC'

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
}