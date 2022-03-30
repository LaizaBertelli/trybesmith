import express from 'express';
// import errorHandler from './middlewares/error.middleware';
import router from './routes';
import 'express-async-errors';

const app = express();

app.use(express.json());
// app.use(errorHandler);
app.use(router);

export default app;
