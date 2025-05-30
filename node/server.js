import http from "node:http";

const notes = [
  { id: 1, content: "Hacer la cama" },
  { id: 2, content: "Lavar los platos" },
  { id: 3, content: "Estudiar JavaScript" },
  { id: 4, content: "Hacer las compras" },
  { id: 5, content: "Limpiar mi habitación" },
  { id: 6, content: "Almorzar a tiempo" },
];

function isUrlValid(url) {}

function requestListener(request, response) {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Bienvenido a Notas");
    response.end();
  } else if (request.url === "/notes") {
    const notesJson = JSON.stringify(notes);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(notesJson);
    response.end();
  } else if (isUrlValid(request.url)) {
    const note = notes.find();
    const noteJson = JSON.stringify(note);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(noteJson);
    response.end();
  }
}

const server = http.createServer(requestListener);
server.listen(5500);
