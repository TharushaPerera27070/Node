const http = require("http");

// Using Event Emitter API
const server = http.createServer();
// emits request events
// subscribe to it/ listen for it/ respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
