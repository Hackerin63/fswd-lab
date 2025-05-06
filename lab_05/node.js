const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/style.css') {
    fs.readFile('style.css', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
})

server.listen(port,()=>{
    console.log('Server running at http://localhost:3000');
})
