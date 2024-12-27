const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fleet_management',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a MySQL');
});

app.post('/api/add-unit', (req, res) => {
    const { 'unit-name': unitName } = req.body; // Otros campos aquí
    const query = `INSERT INTO units (unit_name) VALUES (?)`;
    db.query(query, [unitName], (err, result) => {
        if (err) res.status(500).send('Error al agregar la unidad');
        else res.send('Unidad agregada');
    });
});

app.listen(3001, () => {
    console.log('Servidor para unidades en http://localhost:3001');
});
