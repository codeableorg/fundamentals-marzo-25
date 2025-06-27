import http from "node:http";

function requestListener(_req, response) {
  response.end("Hola Codeable");
}

const server = http.createServer(requestListener);
server.listen(5500);
