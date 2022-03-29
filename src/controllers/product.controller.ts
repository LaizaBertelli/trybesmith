import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();

    return res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const item = await this.productService.create(product);

    return res.status(StatusCodes.CREATED).json({ item });
  };
}