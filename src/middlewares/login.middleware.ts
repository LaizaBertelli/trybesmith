import { NextFunction, Request, Response } from 'express';
import LoginSchema from '../schemas/login.schema';

export default async function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { error } = LoginSchema.validate(req.body);

  if (error) return res.status(400).json({ error: error.details[0].message });

  return next();
}