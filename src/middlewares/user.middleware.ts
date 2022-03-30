import { NextFunction, Request, Response } from 'express';
// import User from '../interfaces/user.interface';
import UserSchema from '../schemas/user.schema';

export default async function validateUser(req: Request, res: Response, next: NextFunction) {
  const { error } = UserSchema.validate(req.body);

  if (error) {
    const errorDetailed = error.details[0].message.split('|');
    return res.status(parseInt(errorDetailed[0], 10)).json({ error: errorDetailed[1] });
  }

  return next();
}
