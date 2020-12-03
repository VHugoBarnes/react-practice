const express = require('express');
require('dotenv').config();

// Crear el servidor de express
const app = express();

// Directorio público
app.use(express.static('public'));

// Lectura y parseo de body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth')); // Todo lo que el archivo vaya exportar, lo habilitará en la ruta
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server en puerto ${process.env.PORT}`);
});