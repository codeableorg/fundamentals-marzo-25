import express from "express";
import fs from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set("view engine", "ejs");
const port = 3000;

async function getNotes() {
  const content = await fs.readFile("./notes.json", "utf8");
  const notes = JSON.parse(content);
  return notes;
}

function homeHandler(request, response) {
  // const homeUrl = join(__dirname, "index.html");
  // response.sendFile(homeUrl);
  response.sendFile("index.html", { root: __dirname });
}

async function notesHandler(request, response) {
  const notes = await getNotes();
  response.render("notes", { notes: notes });
}

app.get("/", homeHandler);
app.get("/notes", notesHandler);

app.get("/notes/:id", (request, response) => {
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
