const express = require('express');
const router = express.Router();
const ProductController = require('../productController');

// Ruta raíz GET /api/products
router.get('/', (req, res) => {
    ProductController.getProducts(req, res);
});

// Ruta GET /api/products/:pid
router.get('/:pid', (req, res) => {
    ProductController.getProductById(req, res);
});

// Ruta raíz POST /api/products
router.post('/', (req, res) => {
    ProductController.addProduct(req, res);
});

// Ruta PUT /api/products/:pid
router.put('/:pid', (req, res) => {
    ProductController.updateProduct(req, res);
});

// Ruta DELETE /api/products/:pid
router.delete('/:pid', (req, res) => {
    ProductController.deleteProduct(req, res);
});

module.exports = router;
