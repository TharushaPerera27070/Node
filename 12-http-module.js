// Built-In modules -> HTTP

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
    return;
  }
  if (req.url === "/about") {
    res.end("This is the about page");
    return;
  }
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(`
    <h1>Oops!</h1>

    <p>Can't seem to find the page you're looking for </p>
    <a href="/">back home</a>
    `);
});

server.listen(5000);
