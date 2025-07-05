import http from "node:http";

function requestListener(_req, response) {
  // response.write('200', { "content/type": "text/plan" });
  response.end("Hola Codeable");
}

const server = http.createServer(requestListener);
server.listen(5500);
