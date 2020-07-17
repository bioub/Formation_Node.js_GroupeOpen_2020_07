const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});

app.get('/hello', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.get('/api/user/me', (req, res) => {
  res.json({name: 'Romain'});
});

const server = http.createServer(app);

server.on('error', (err) => console.log(err));

server.listen(8080, () => {
  console.log('server started on port 8080');
});
