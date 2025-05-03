// server/config/database.js

const mysql = require('mysql2/promise');
require('dotenv').config();

// Parámetros de conexión
const dbConfig = {
  host: process.env.DB_HOST || 'db4free.net',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false // Necesario para conexiones SSL en db4free.net
  }
};

// Crear pool de conexiones
const pool = mysql.createPool(dbConfig);

// Función para probar la conexión
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión a la base de datos establecida correctamente');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
    return false;
  }
};

module.exports = {
  pool,
  testConnection
};