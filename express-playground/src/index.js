import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function homeHandler(request, response) {
  const homeUrl = join(__dirname, 'index.html');
  response.sendFile(homeUrl);
}

app.get("/", homeHandler);

app.get("/notes", (request, response) => {
  response.send("Notas");
});

app.get("/notes/:id", (request, response) => {
  // console.log(request.params);
  const noteId = request.params.id;
  response.send(`Detalle: Nota #${noteId}`);
});

app.get("/new-note", (request, response) => {
  response.send("Formulario");
});

app.post("/notes", (request, response) => {
  response.send("Notas");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
