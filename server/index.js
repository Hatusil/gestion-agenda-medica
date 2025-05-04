const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const { testConnection } = require('./config/database');

// Probar conexión
testConnection();

app.use(cors());       

app.get('/', (req, res) => {
  res.send('Hola desde el backend!');
});

const { pool } = require('./config/database');

app.get('/test-db', async (req, res) => {
  try {
    console.log('Conectando a base de datos...');
    const [result] = await pool.query('SELECT 1 + 1 AS resultado');
    console.log('Consulta exitosa:', result);
    res.json(result[0]);
  } catch (err) {
    console.error('ERROR:', err);
    res.status(500).json({ error: err.message });
  }
});

/*app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS resultado');
    res.json(rows[0]);
  } catch (error) {
    console.error('Error en /test-db:', error);
    res.status(500).send('Error al consultar la base de datos');
  }
});*/


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
