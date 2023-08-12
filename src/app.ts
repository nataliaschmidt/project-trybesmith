import express from 'express';
import loginRouter from './routes/login.router';
import ordersRouter from './routes/orders.router';
import productsRouter from './routes/products.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;