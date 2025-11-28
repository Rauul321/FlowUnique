
const envs = require('dotenv');
const express = require('express');
const cors = require('cors');

const app = express();
const db = require('./config/database.js'); // Asegúrate de tener un módulo db.js para manejar la conexión a la base de datos

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000', // Cambia esto según la URL de tu frontend
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

db.sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
});

const authRoutes = require('./routes/auth.routes.js');

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});





