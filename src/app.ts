import express from 'express';
import productsRouter from './routes/products.router';

const app = express();

app.use(express.json());

export default app;

app.use(productsRouter);
