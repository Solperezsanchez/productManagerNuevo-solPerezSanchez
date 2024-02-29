const ProductManager = require('./productManager');

const productManager = new ProductManager('./productos.json');

const ProductController = {
  getAllProducts: async (req, res) => {
    try {
      const products = productManager.getProducts();
      if (products.length > 0) {
        res.json(products);
      } else {
        res.status(404).json({ message: 'No se encontraron productos' });
      }
    } catch (error) {
      console.error('Error al obtener todos los productos:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getProductById: async (req, res) => {
    try {
      const productId = parseInt(req.params.pid);
      const product = productManager.getProductById(productId);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener producto por ID:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  addProduct: async (req, res) => {
    try {
      const productData = req.body;
      productManager.addProduct(productData);
      res.status(201).json({ message: 'Producto agregado correctamente' });
    } catch (error) {
      console.error('Error al agregar un nuevo producto:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const productId = parseInt(req.params.pid);
      const updatedFields = req.body;
      const product = productManager.getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      productManager.updateProduct(productId, updatedFields);
      res.json({ message: 'Producto actualizado correctamente' });
    } catch (error) {
      console.error('Error al actualizar el producto:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const productId = parseInt(req.params.pid);
      const product = productManager.getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      productManager.deleteProduct(productId);
      res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el producto:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};

module.exports = ProductController;
