const express = require('express');
const http = require('http');

const app = express();

// app.use(express.json()); // middleware (plugin) qui fourni
// req.body parsé depuis le JSON

// Middleware logger
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Home !</h1>');
});

app.get('/hello/:name', (req, res) => {
  res.send(`<h1>Hello ${req.params.name}</h1>`);
});

app.get('/api/user/me', (req, res) => {
  res.json({name: 'Romain'});
});

app.post('/send-email', express.json(), (req, res) => {
  console.log(req.body);
  res.json({msg: 'Mail sent', body: req.body});
});


const server = http.createServer(app);

server.on('error', (err) => console.log(err));

server.listen(8080, () => {
  console.log('server started on port 8080');
});
