import http from "node:http"; // EcmaScript6 Module
import fs from "node:fs";

function isUrlValid(url) {
  // "/notes/:id"
  const urlArray = url.split("/"); // ['', 'notes', '3']
  urlArray.shift(); // ['notes', '3']
  return urlArray.length === 2 && urlArray[0] === "notes";
}

function requestListener(request, response) {
  // Identificar qué tipo de request: get, post
  const method = request.method;

  // Gestor de los diferentes tipos de url
  if (method === "GET") {
    if (request.url === "/") {
      fs.readFile("./pages/index.html", "utf8", (err, content) => {
        if (err) {
          console.log(err);
          return;
        }

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(content);
        response.end();
      });
    } else if (request.url === "/notes") {
      /*
    fs.readFile("./pages/notes.html", "utf8", (err, content) => {
      if (err) {
        console.log(err);
        return;
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(content);
      response.end();
    });
    */
      fs.readFile("./notes.json", "utf8", (err, content) => {
        if (err) {
          console.log(err);
          return;
        }

        const notes = JSON.parse(content);
        const liElements = notes
          .map(
            (note) => `<li><a href="/notes/${note.id}">${note.content}</a></li>`
          )
          .join("");
        const htmlContent = `<!DOCTYPE html>
                            <html lang="en">
                              <head>
                                <meta charset="UTF-8" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <link rel="stylesheet" href="./styles/notes.css">
                                <title>Document</title>
                              </head>
                              <body>
                                <h1>Notas:</h1>
                                <ol>${liElements}</ol>
                                <a href="/new-note">Crear nueva nota</a>
                              </body>
                            </html>`;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(htmlContent);
        response.end();
      });
    } else if (isUrlValid(request.url)) {
      const urlArray = request.url.split("/");
      urlArray.shift();
      const noteId = Number(urlArray[1]);

      fs.readFile("./notes.json", "utf8", (err, content) => {
        if (err) {
          console.log(err);
          return;
        }

        const notes = JSON.parse(content);
        const note = notes.find((note) => note.id === noteId);
        const htmlContent = `<!DOCTYPE html>
                            <html lang="en">
                              <head>
                                <meta charset="UTF-8" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <title>Nota ${note.id}</title>
                              </head>
                              <body>
                                <h1>Nota ${note.id}:</h1>
                                <p>ID: ${note.id}</p>
                                <p>Contenido: ${note.content}</p>
                                <a href="/notes">Volver a todas las notas</a>
                              </body>
                            </html>`;
        if (note) {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(htmlContent);
          response.end();
        } else {
          response.writeHead(404, { "Content-Type": "application/json" });
          response.write(JSON.stringify({ error: "Nota no encontrada" }));
          response.end();
        }
      });
    } else if (request.url === "/new-note") {
      fs.readFile("./pages/new-note.html", "utf8", (err, content) => {
        if (err) {
          console.log(err);
          return;
        }

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(content);
        response.end();
      });
    } else if (request.url.startsWith("/styles/")) {
      // CSS
      fs.readFile("./styles/notes.css", (err, data) => {
        if (err) {
          console.log("ERROR!!!");
          response.writeHead(404, { "Content-Type": "text/plain" });
          response.end("Archivo no encontrado");
        } else {
          response.writeHead(200, { "Content-Type": "text/css" });
          response.end(data);
        }
      });
    } else {
      fs.readFile("./pages/404.html", "utf8", (err, content) => {
        if (err) {
          console.log(err);
          return;
        }

        response.writeHead(404, { "Content-Type": "text/html" });
        response.write(content);
        response.end();
      });
    }
  } else if (method === "POST") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk.toString();
    });

    request.on("end", () => {
      // aquí tienes el cuerpo completo de la solicitud POST
      fs.readFile("./notes.json", "utf8", (err, content) => {
        if (err) {
          console.log(err);
          return;
        }

        const notes = JSON.parse(content);
        const newNote = { id: notes.length + 1, content: body };
        notes.push(newNote);

        fs.writeFile("./notes.json", JSON.stringify(notes), (err) => {
          if (err) {
            console.log(err);
          }
        });

        response.writeHead(303, { Location: "/notes" });
        // response.write(content);
        response.end();
      });
    });
  }
}

const server = http.createServer(requestListener);
server.listen(5500);
