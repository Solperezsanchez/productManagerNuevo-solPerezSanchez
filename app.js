import express from 'express';
import productsRouter from './routes/products.js';
import cartsRouter from './routes/carts.js';

const app = express();
const port = 8080;

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Rutas para productos
app.use('/api/products', productsRouter);

// Rutas para carritos
app.use('/api/carts', cartsRouter);

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
