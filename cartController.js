import CartManager from '../cartManager.js';

const cartManager = new CartManager('../carritos.json');

const CartController = {
  createCart: async (req, res) => {
    try {
      const newCart = cartManager.createCart();
      res.status(201).json({ message: 'Nuevo carrito creado', cartId: newCart.id });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el carrito', error: error.message });
    }
  },

  getCartProducts: async (req, res) => {
    const cartId = parseInt(req.params.cid);
    try {
      const cartProducts = cartManager.getCartProducts(cartId);
      res.status(200).json(cartProducts);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los productos del carrito', error: error.message });
    }
  },

  addProductToCart: async (req, res) => {
    const cartId = parseInt(req.params.cid);
    const productId = parseInt(req.params.pid);
    const product = req.body;
    try {
      cartManager.addProductToCart(cartId, product);
      res.status(201).json({ message: 'Producto agregado al carrito correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al agregar el producto al carrito', error: error.message });
    }
  },

  getProductFromCart: async (req, res) => {
    const cartId = parseInt(req.params.cid);
    const productId = parseInt(req.params.pid);
    try {
      const product = cartManager.getProductFromCart(cartId, productId);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Producto no encontrado en el carrito' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el producto del carrito', error: error.message });
    }
  },

  updateProductQuantity: async (req, res) => {
    const cartId = parseInt(req.params.cid);
    const productId = parseInt(req.params.pid);
    const newQuantity = parseInt(req.body.quantity);
    try {
      const success = cartManager.updateProductQuantity(cartId, productId, newQuantity);
      if (success) {
        res.status(200).json({ message: 'Cantidad del producto actualizada correctamente en el carrito' });
      } else {
        res.status(404).json({ message: 'No se pudo actualizar la cantidad del producto en el carrito' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la cantidad del producto en el carrito', error: error.message });
    }
  },

  deleteProductFromCart: async (req, res) => {
    const cartId = parseInt(req.params.cid);
    const productId = parseInt(req.params.pid);
    try {
      const success = cartManager.deleteProductFromCart(cartId, productId);
      if (success) {
        res.status(200).json({ message: 'Producto eliminado correctamente del carrito' });
      } else {
        res.status(404).json({ message: 'No se pudo eliminar el producto del carrito' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el producto del carrito', error: error.message });
    }
  }
};

export default CartController;
