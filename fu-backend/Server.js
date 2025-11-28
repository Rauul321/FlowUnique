
const envs = require('dotenv');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const db = require('./config/database.js'); // Asegúrate de tener un módulo db.js para manejar la conexión a la base de datos



const corsOptions = {
    origin: 'http://localhost:5173', // Cambia esto según la URL de tu frontend
    optionsSuccessStatus: 200
};

app.use(cors());
app.use(express.json());

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





