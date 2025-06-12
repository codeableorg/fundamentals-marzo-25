import http from "node:http"; // EcmaScript6 Module
import fs from "node:fs";

function isUrlValid(url) {
  const urlArray = url.split("/"); // ['', 'notes', '3']
  urlArray.shift(); // ['notes', '3']
  return urlArray.length === 2 && urlArray[0] === "notes";
}

function requestListener(request, response) {
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

      // const liElements = notes.map((note) => `<li>${note.content}</li>`).join("");
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
        .map((note) => `<li>${note.content}</li>`)
        .join("");
      const htmlContent = `<!DOCTYPE html>
                            <html lang="en">
                              <head>
                                <meta charset="UTF-8" />
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <title>Document</title>
                              </head>
                              <body>
                                <h1>Notas:</h1>
                                <ol>${liElements}</ol>
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
    const note = notes.find((note) => note.id === noteId);

    if (note) {
      const noteJson = JSON.stringify(note);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(noteJson);
      response.end();
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ error: "Nota no encontrada" }));
      response.end();
    }
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
}

const server = http.createServer(requestListener);
server.listen(5500);
