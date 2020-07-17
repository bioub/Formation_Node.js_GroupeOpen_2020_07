const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request http from client');
  console.log(req.method + ' ' + req.url);
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<h1>Hello</h1>');
});

// server.once('listening', () => {
//   console.log('server started on port 8080');
// });

server.on('error', (err) => {
  console.log('error', err);
});

// server.on('connection', (socket) => {
//   console.log('connection from client');
//   socket.pipe(process.stdout);
//   socket.write('HTTP/1.1 200 OK\r\n');
//   socket.write('Content-type: text/html\r\n');
//   socket.write('\r\n');
//   socket.write('<h1>Hello</h1>\r\n');
//   socket.end('\r\n');
// });


// server.on('request', (req, res) => {
//   console.log('request http from client');
//   console.log(req.method + ' ' + req.url);
//   res.statusCode = 200;
//   res.setHeader('Content-type', 'text/html');
//   res.end('<h1>Hello</h1>');
// });

server.listen(8080, () => {
  console.log('server started on port 8080');
});
