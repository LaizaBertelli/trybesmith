import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/product.interface';
import ProductSchema from '../schemas/product.schema';

export default async function validateProduct(req: Request, res: Response, next: NextFunction) {
  const product: Product = req.body;
  const { error } = ProductSchema.validate(product);

  if (error) {
    const errorDetailed = error.details[0].message.split('|');
    return res.status(parseInt(errorDetailed[0], 10)).json({ error: errorDetailed[1] });
  }

  return next();
}
