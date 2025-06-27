import express from "express";

const app = express();
const port = 3000;

// Handlers
app.get("/", (req, res) => {
  console.log(`Metodo: ${req.method}, Endpoint: ${req.url}`);
  res.send("Hola Mundo!");
});

app.get("/notes", (request, response) => {
  response.send("Notas");
});

app.get("/notes/*", (request, response) => {
  response.send("Notas");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
