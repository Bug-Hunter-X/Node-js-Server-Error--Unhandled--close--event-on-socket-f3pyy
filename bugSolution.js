const http = require('http');

const server = http.createServer((req, res) => {
  let responseSent = false;

  // Simulate a delay to trigger the bug
  setTimeout(() => {
    if (!responseSent) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, World!');
      responseSent = true;
    }
  }, 5000);

  req.on('close', () => {
    if (!responseSent) {
      console.log('Request closed prematurely');
    }
  });
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});