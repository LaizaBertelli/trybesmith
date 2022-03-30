import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';
import generateToken from '../helper/generateToken';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const { username, classe, level } = await this.userService.create(req.body);

    const token = generateToken({ username, classe, level });
    return res.status(StatusCodes.CREATED).json({ token });
  };
}