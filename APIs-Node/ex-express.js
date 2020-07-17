const express = require('express');
const http = require('http');

const app = express();

const users = [
  {
    name: 'John',
    id: 1,
  },
  {
    name: 'Bill',
    id: 2,
  },
  {
    name: 'Pitt',
    id: 3,
  },
];

// app.use(express.json()); // middleware (plugin) qui fourni
// req.body parsé depuis le JSON

// Middleware logger
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

// GET /api/users -> retourne en JSON le tableau users
// GET /api/users/:id -> retourne JSON le user dont l'id est passé dans l'URL
// POST /api/users -> insère dans le tableau le user reçu en body
// génère un id (Math.random())
// retourne JSON le user avec l'id
// Status Code : 201

const server = http.createServer(app);

server.on('error', (err) => console.log(err));

server.listen(8080, () => {
  console.log('server started on port 8080');
});
