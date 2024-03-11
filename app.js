const express = require('express');
const exphbs = require('express-handlebars');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const productsRouter = require('./routes/products.js');
const cartsRouter = require('./routes/carts.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configurar Handlebars como motor de vistas
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configurar directorio de vistas
app.set('views', path.join(__dirname, 'views'));

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Rutas para productos
app.use('/api/products', productsRouter);

// Rutas para carritos
app.use('/api/carts', cartsRouter);

// Iniciar el servidor
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

