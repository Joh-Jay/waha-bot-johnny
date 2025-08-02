const http = require('http');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WAHA Bot está rodando.\n');
}).listen(PORT, () => {
  console.log(`Bot iniciado na porta ${PORT}`);
});
