import { sign } from 'jsonwebtoken';
import Token from '../interfaces/token.interface';

const jwtConfig = {
  expiresIn: '1d',
};

export default (data: Token) => (sign({ data }, 'chavesupersecreta', jwtConfig));