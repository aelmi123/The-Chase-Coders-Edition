const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());


// server.use('/', usersRoutes);
server.get('/', (req, res) => res.send('Welcome all Quizzards!'))


module.exports = server;
