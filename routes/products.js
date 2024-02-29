const express = require('express');
const router = express.Router();
const ProductController = require('./productController.js');

// Ruta raíz GET /api/products
router.get('/', ProductController.getProducts);

// Ruta GET /api/products/:pid
router.get('/:pid', ProductController.getProductById);

// Ruta raíz POST /api/products
router.post('/', ProductController.addProduct);

// Ruta PUT /api/products/:pid
router.put('/:pid', ProductController.updateProduct);

// Ruta DELETE /api/products/:pid
router.delete('/:pid', ProductController.deleteProduct);

module.exports = router;


[
    {
      "id": 1,
      "title": "Elite trainer box 151",
      "description": "1 tarjeta promocional de foil de arte completo con Snorlax. 65 fundas para cartas. 45 cartas de Energía de Pokémon TCG. Una guía para jugadores de la expansión Scarlet & Violet—151.",
      "price": 185000,
      "thumbnail": "img/etbSnorlax.png",
      "code": "0001",
      "stock": 10
    },
    {
      "id": 2,
      "title": "Elite trainer box vivid voltage",
      "description": "La Caja de Entrenador Élite de Espada y Escudo-Voltaje Vívido de JCC Pokémon incluye  -8 paquetes de mejora de Espada y Escudo-Voltaje Vívido de JCC Pokémon-65 fundas para cartas inspiradas en Pikachu Gigamax-45 cartas de Energía de JCC Pokémon-1 guía para jugadores de la expansión Espada y Escudo-Voltaje Vívido-1 libro de reglas de JCC Pokémon-6 dados de contadores de daño-1 dado para lanzamiento de moneda válido para competiciones legales-2 marcadores de condición acrílicos-1 caja de coleccionista para guardarlo todo con 4 divisores para mantenerlo todo organizado-1 carta con código para el Juego de Cartas Coleccionables Pokémon Online",
      "price": 170000,
      "thumbnail": "img/etbPikachu.png",
      "code": "0002",
      "stock": 8
    },
    {
        "id": 3,
        "title": "Elite trainer box Paradox Rift Scarlet and Violet Paradox Rift",
        "description": "Paradox Rift Elite Trainer Box ETB Inglés Pokémon TCG-9 Sobres de Escarlata y Púrpura- Paradox Rift (Brecha Paradójica) en ingles de JCC Pokémon-1 carta holográfica de promoción de ilustración expandida de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-65 fundas para cartas con ilustración de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-45 cartas de Energía de JCC Pokémon-1 guía para jugadores de la expansión Escarlata y Púrpura-Paradox Rift (Brecha Paradójica)-6 dados a modo de contadores de daño-1 dado para lanzamiento de moneda válido para competiciones legales-2 marcadores de condición de plástico-1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada-1 carta con código para el Juego de Cartas Coleccionables Pokémon Live",
        "price": 190000,
        "thumbnail": "img/etbParadoxRift.png",
        "code": "0003",
        "stock": 15
      },
      {
        "id": 4,
        "title": "Elite trainer box Astral Radiance",
        "description": "Astral Radiance Elite Trainer Box ETB Inglés Pokémon TCG-9 Sobres de Escarlata y Púrpura- Paradox Rift (Brecha Paradójica) en ingles de JCC Pokémon-1 carta holográfica de promoción de ilustración expandida de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-65 fundas para cartas con ilustración de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-45 cartas de Energía de JCC Pokémon-1 guía para jugadores de la expansión Escarlata y Púrpura-Paradox Rift (Brecha Paradójica)-6 dados a modo de contadores de daño-1 dado para lanzamiento de moneda válido para competiciones legales-2 marcadores de condición de plástico-1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada-1 carta con código para el Juego de Cartas Coleccionables Pokémon Live",
        "price": 195000,
        "thumbnail": "img/etbAstralRadiance.jpg",
        "code": "0004",
        "stock": 9
      },
      {
        "id": 5,
        "title": "Elite trainer box Lost Origin",
        "description": "Lost Origin Elite Trainer Box ETB Inglés Pokémon TCG-9 Sobres de Escarlata y Púrpura- Paradox Rift (Brecha Paradójica) en ingles de JCC Pokémon-1 carta holográfica de promoción de ilustración expandida de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-65 fundas para cartas con ilustración de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-45 cartas de Energía de JCC Pokémon-1 guía para jugadores de la expansión Escarlata y Púrpura-Paradox Rift (Brecha Paradójica)-6 dados a modo de contadores de daño-1 dado para lanzamiento de moneda válido para competiciones legales-2 marcadores de condición de plástico-1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada-1 carta con código para el Juego de Cartas Coleccionables Pokémon Live",
        "price": 200000,
        "thumbnail": "img/etbLostOrigin.jpg",
        "code": "0005",
        "stock": 10
      },
      {
        "id": 6,
        "title": "Elite trainer box Obsidian Flames",
        "description": "Obsidian Flames Elite Trainer Box ETB Inglés Pokémon TCG-9 Sobres de Escarlata y Púrpura- Paradox Rift (Brecha Paradójica) en ingles de JCC Pokémon-1 carta holográfica de promoción de ilustración expandida de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-65 fundas para cartas con ilustración de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-45 cartas de Energía de JCC Pokémon-1 guía para jugadores de la expansión Escarlata y Púrpura-Paradox Rift (Brecha Paradójica)-6 dados a modo de contadores de daño-1 dado para lanzamiento de moneda válido para competiciones legales-2 marcadores de condición de plástico-1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada-1 carta con código para el Juego de Cartas Coleccionables Pokémon Live",
        "price": 210000,
        "thumbnail": "img/etbObsidianFlames.jpg",
        "code": "0006",
        "stock": 14
      },
      {
        "id": 7,
        "title": "Elite trainer box Paldea Evolved",
        "description": "Paldea Evolved Elite Trainer Box ETB Inglés Pokémon TCG-9 Sobres de Escarlata y Púrpura- Paradox Rift (Brecha Paradójica) en ingles de JCC Pokémon-1 carta holográfica de promoción de ilustración expandida de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-65 fundas para cartas con ilustración de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-45 cartas de Energía de JCC Pokémon-1 guía para jugadores de la expansión Escarlata y Púrpura-Paradox Rift (Brecha Paradójica)-6 dados a modo de contadores de daño-1 dado para lanzamiento de moneda válido para competiciones legales-2 marcadores de condición de plástico-1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada-1 carta con código para el Juego de Cartas Coleccionables Pokémon Live",
        "price": 180000,
        "thumbnail": "img/etbPaldeaEvolved.jpg",
        "code": "0007",
        "stock": 20
      },
      {
        "id": 8,
        "title": "Elite trainer box Paldean Fates",
        "description": "Paldean Fates Elite Trainer Box ETB Inglés Pokémon TCG-9 Sobres de Escarlata y Púrpura- Paradox Rift (Brecha Paradójica) en ingles de JCC Pokémon-1 carta holográfica de promoción de ilustración expandida de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-65 fundas para cartas con ilustración de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-45 cartas de Energía de JCC Pokémon-1 guía para jugadores de la expansión Escarlata y Púrpura-Paradox Rift (Brecha Paradójica)-6 dados a modo de contadores de daño-1 dado para lanzamiento de moneda válido para competiciones legales-2 marcadores de condición de plástico-1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada-1 carta con código para el Juego de Cartas Coleccionables Pokémon Live",
        "price": 180000,
        "thumbnail": "img/etbPaldeanFates.jpg",
        "code": "0008",
        "stock": 11
      },
      {
        "id": 9,
        "title": "Elite trainer box Scarlet and Violet",
        "description": "Scarlet and Violet Elite Trainer Box ETB Inglés Pokémon TCG-9 Sobres de Escarlata y Púrpura- Paradox Rift (Brecha Paradójica) en ingles de JCC Pokémon-1 carta holográfica de promoción de ilustración expandida de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-65 fundas para cartas con ilustración de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-45 cartas de Energía de JCC Pokémon-1 guía para jugadores de la expansión Escarlata y Púrpura-Paradox Rift (Brecha Paradójica)-6 dados a modo de contadores de daño-1 dado para lanzamiento de moneda válido para competiciones legales-2 marcadores de condición de plástico-1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada-1 carta con código para el Juego de Cartas Coleccionables Pokémon Live",
        "price": 195500,
        "thumbnail": "img/etbScarletAndViolet.jpg",
        "code": "0009",
        "stock": 30
      },
      {
        "id": 10,
        "title": "Elite trainer box Silver Tempest",
        "description": "Silver tempest Elite Trainer Box ETB Inglés Pokémon TCG-9 Sobres de Escarlata y Púrpura- Paradox Rift (Brecha Paradójica) en ingles de JCC Pokémon-1 carta holográfica de promoción de ilustración expandida de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-65 fundas para cartas con ilustración de Iron Valiant o Roaring Moon (dependiendo del modelo elegido)-45 cartas de Energía de JCC Pokémon-1 guía para jugadores de la expansión Escarlata y Púrpura-Paradox Rift (Brecha Paradójica)-6 dados a modo de contadores de daño-1 dado para lanzamiento de moneda válido para competiciones legales-2 marcadores de condición de plástico-1 caja de coleccionista con 4 divisores para guardarlo todo de forma organizada-1 carta con código para el Juego de Cartas Coleccionables Pokémon Live",
        "price": 200000,
        "thumbnail": "img/etbSilverTempest.jpg",
        "code": "0010",
        "stock": 26
      }
  ]
  