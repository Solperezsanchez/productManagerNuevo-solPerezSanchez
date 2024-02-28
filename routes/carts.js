import express from 'express';
const router = express.Router();
import CartController from './cartController.js';

// Ruta POST /api/carts
router.post('/', CartController.createCart);

// Ruta GET /api/carts/:cid/products
router.get('/:cid/products', CartController.getCartProducts);

// Ruta POST /api/carts/:cid/products/:pid
router.post('/:cid/products/:pid', CartController.addProductToCart);

// Ruta GET /api/carts/:cid/products/:pid
router.get('/:cid/products/:pid', CartController.getProductFromCart);

// Ruta PUT /api/carts/:cid/products/:pid
router.put('/:cid/products/:pid', CartController.updateProductQuantity);

// Ruta DELETE /api/carts/:cid/products/:pid
router.delete('/:cid/products/:pid', CartController.deleteProductFromCart);

export default router;
