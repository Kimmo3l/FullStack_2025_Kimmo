const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    if (req.url === '/') {
        res.writeHead(200);
        res.end('Hello, World!');
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end('About Page');
    } else if (req.url === '/contact') {
        res.writeHead(200);
        res.end('Contact Page');
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  // En ole täysin varma olisiko tämän voinut tehdä helpommin lyhyemmillä koodin pätkillä ja haettiinko tätä ratkaisua