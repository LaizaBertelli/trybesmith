import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateProduct from '../middlewares/product.middleware';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/products', productController.getAll);
productRouter.post('/products', validateProduct, productController.create);

export default productRouter;