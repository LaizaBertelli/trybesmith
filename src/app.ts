import express from 'express';
import errorHandler from './middlewares/error.middleware';
import productRouter from './routes/products.routes';

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(productRouter);

export default app;
