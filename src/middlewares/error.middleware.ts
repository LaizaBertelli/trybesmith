import { Request, Response, NextFunction } from 'express';

export default function errorHandler(err: Error, _req: Request, res: Response, next: NextFunction) {
  const { name, message } = err;
  console.log(`name: ${name}`);

  switch (name) {
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflitError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
}
