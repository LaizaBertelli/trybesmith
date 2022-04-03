import { Request, Response } from 'express';
import generateToken from '../helper/generateToken';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public create = async (req: Request, res: Response) => {
    const [userExists] = await this.loginService.create(req.body);

    if (!userExists) { 
      return res.status(401).json({ error: 'Username or password invalid' });
    }
    if (userExists.password !== req.body.password) {
      return res.status(401).json({ error: 'Username or password invalid' });
    }
    const payload = {
      id: userExists.id,
      username: userExists.username,
    };
  
    const token = generateToken(payload);
    return res.status(200).json({ token });
  };
}