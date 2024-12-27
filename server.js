const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para procesar datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Contraseña de acceso
const PASSWORD = 'tauro2024';

// Ruta principal (carga login.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Manejo del formulario de inicio de sesión
app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === PASSWORD) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    } else {
        res.send('<h1>Contraseña incorrecta</h1><a href="/">Volver</a>');
    }
});

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
