import { Router } from 'express';
import orderRouter from './order.route';

import productRouter from './products.routes';
import userRouter from './user.route';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;
