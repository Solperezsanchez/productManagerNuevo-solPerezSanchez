import express from 'express';
import ProductManager from './Managers/ProductManager.js';

const router = express.Router();
const productManager = new ProductManager('./data/products.json');

router.get('/products', async (req, res) => {
  try {
    const limit = req.query.limit;
    const products = await productManager.getProducts();

    if (limit) {
      res.json(products.slice(0, parseInt(limit)));
    } else {
      res.json(products);
    }
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});

router.get('/products/:pid', async (req, res) => {
  try {
    const productId = parseInt(req.params.pid);
    const product = await productManager.getProductById(productId);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener producto por ID:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});

router.post('/products', async (req, res) => {
  try {
    const newProduct = req.body;
    await productManager.addProduct(newProduct);
    res.status(201).send('Producto agregado correctamente');
  } catch (error) {
    console.error('Error al agregar producto:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});

router.put('/products/:pid', async (req, res) => {
  try {
    const productId = parseInt(req.params.pid);
    const updatedFields = req.body;
    await productManager.updateProduct(productId, updatedFields);
    res.status(200).send('Producto actualizado correctamente');
  } catch (error) {
    console.error('Error al actualizar producto:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});

router.delete('/products/:pid', async (req, res) => {
  try {
    const productId = parseInt(req.params.pid);
    await productManager.deleteProduct(productId);
    res.status(200).send('Producto eliminado correctamente');
  } catch (error) {
    console.error('Error al eliminar producto:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});

export default router;

