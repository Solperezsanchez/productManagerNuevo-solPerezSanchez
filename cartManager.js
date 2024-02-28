import fs from 'fs';

class CartManager {
    constructor(filePath) {
        this.filePath = filePath;
        this.carts = this.loadCarts();
    }

    loadCarts() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data) || [];
        } catch (error) {
            console.error('Error al cargar los carritos:', error.message);
            return [];
        }
    }

    saveCarts() {
        try {
            const data = JSON.stringify(this.carts, null, 2);
            fs.writeFileSync(this.filePath, data, 'utf8');
        } catch (error) {
            console.error('Error al guardar los carritos:', error.message);
        }
    }

    createCart() {
        const newCart = {
            id: Date.now(), 
            products: []    
        };
        this.carts.push(newCart);
        this.saveCarts();
        return newCart;
    }

    getCartProducts(cartId) {
        const cart = this.carts.find(cart => cart.id === cartId);
        return cart ? cart.products : [];
    }

     addProductToCart(cartId, product) {
        const cart = this.carts.find(cart => cart.id === cartId);
        if (cart) {
            cart.products.push(product);
            this.saveCarts();
        } else {
            console.error('No se encontró el carrito.');
        }
    }

     
     getProductFromCart(cartId, productId) {
        const cart = this.carts.find(cart => cart.id === cartId);
        if (cart) {
            const product = cart.products.find(product => product.id === productId);
            return product ? product : null;
        } else {
            console.error('No se encontró el carrito.');
            return null;
        }
    }

     
     updateProductQuantity(cartId, productId, newQuantity) {
        const cart = this.carts.find(cart => cart.id === cartId);
        if (cart) {
            const product = cart.products.find(product => product.id === productId);
            if (product) {
                product.quantity = newQuantity;
                this.saveCarts();
                return true;
            } else {
                console.error('No se encontró el producto en el carrito.');
                return false;
            }
        } else {
            console.error('No se encontró el carrito.');
            return false;
        }
    }

    deleteProductFromCart(cartId, productId) {
        const cartIndex = this.carts.findIndex(cart => cart.id === cartId);
        if (cartIndex !== -1) {
            const cart = this.carts[cartIndex];
            const productIndex = cart.products.findIndex(product => product.id === productId);
            if (productIndex !== -1) {
                cart.products.splice(productIndex, 1);
                this.saveCarts();
                return true;
            } else {
                console.error('No se encontró el producto en el carrito.');
                return false;
            }
        } else {
            console.error('No se encontró el carrito.');
            return false;
        }
    }
}

export default CartManager;
