import { Router } from 'express';

import productRouter from './products.routes';
import userRouter from './user.route';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;
