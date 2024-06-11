// importamos modulos necesarios

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Crear instancia de express
const app = express();

// Agregar el middlwware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// Crear tus rutas
app.get('/users', (req, res) => {
    res.send('Lista de usuarios');
});

//Inicial el servidor 
const port =3000;

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto');
})



