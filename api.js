const http = require('http');
require('dotenv').config();

const server = http.createServer((req, res) => {
  if (req.url === '/headers' && req.method === 'GET') {
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    res.write(JSON.stringify(req.headers));
    res.end();
  } else {
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(process.env.SERVER_PORT, process.env.HOST_NAME, () => {
  console.log(`Server running at ${process.env.API_URL}`);
});
