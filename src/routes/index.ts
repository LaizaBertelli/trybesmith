import { Router } from 'express';

import orderRouter from './order.route';
import productRouter from './products.routes';
import userRouter from './user.route';
import loginRouter from './login.route';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/login', loginRouter);

export default router;
