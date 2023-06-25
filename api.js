// Cargar las variables de entorno
const express = require('express');
const sql = require('mssql');
require('dotenv').config(); 

// Configuración de la conexión a la base de datos
const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true, // Si estás utilizando Azure, asegúrate de habilitar la encriptación
  },
};

// Crear una instancia de la aplicación Express
const app = express();

// Establecer la conexión con la base de datos
sql.connect(dbConfig)
  .then(() => {
    console.log('Conexión establecida con la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Definir una ruta para obtener todas las rutas disponibles
app.get('/routes', (req, res) => {
  // Ejecutar una consulta SQL para obtener las rutas
  const query = 'SELECT * FROM Routes';

  new sql.Request().query(query)
    .then((result) => {
      // Enviar la respuesta con los datos obtenidos
      res.json(result.recordset);
    })
    .catch((error) => {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    });
});

app.get('/agency', (req, res) => {
  // Ejecutar una consulta SQL para obtener las rutas
  const query = 'SELECT * FROM agency';

  new sql.Request().query(query)
    .then((result) => {
      // Enviar la respuesta con los datos obtenidos
      res.json(result.recordset);
    })
    .catch((error) => {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    });
});

app.get('/trip', (req, res) => {
  // Ejecutar una consulta SQL para obtener las rutas
  const query = 'SELECT * FROM trips';

  new sql.Request().query(query)
    .then((result) => {
      // Enviar la respuesta con los datos obtenidos
      res.json(result.recordset);
    })
    .catch((error) => {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    });
});
app.get('/calendar', (req, res) => {
  // Ejecutar una consulta SQL para obtener las rutas
  const query = 'SELECT * FROM calendar';

  new sql.Request().query(query)
    .then((result) => {
      // Enviar la respuesta con los datos obtenidos
      res.json(result.recordset);
    })
    .catch((error) => {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    });
});

app.get('/stop', (req, res) => {
  // Ejecutar una consulta SQL para obtener las rutas
  const query = 'SELECT * FROM stop';

  new sql.Request().query(query)
    .then((result) => {
      // Enviar la respuesta con los datos obtenidos
      res.json(result.recordset);
    })
    .catch((error) => {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    });
});

app.get('/stop_times', (req, res) => {
  // Ejecutar una consulta SQL para obtener las rutas
  const query = 'SELECT * FROM stop_times';

  new sql.Request().query(query)
    .then((result) => {
      // Enviar la respuesta con los datos obtenidos
      res.json(result.recordset);
    })
    .catch((error) => {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    });
});
// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor API iniciado en el puerto 3000');
});



