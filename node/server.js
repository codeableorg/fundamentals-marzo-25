import http from "node:http"; // EcmaScript6 Module

const notes = [
  { id: 1, content: "Hacer la cama" },
  { id: 2, content: "Lavar los platos" },
  { id: 3, content: "Estudiar JavaScript" },
];

function isUrlValid(url) {
  const urlArray = url.split("/"); // ['', 'notes', '3']
  urlArray.shift(); // ['notes', '3']
  return urlArray.length === 2 && urlArray[0] === "notes";
}

function requestListener(request, response) {
  if (request.url === "/") {
    const html = `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Document</title>
                  </head>
                  <body>
                      <h1>Bienvenido a Notas</h1>
                  </body>
                  </html>`;

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  } else if (request.url === "/notes") {
    const liElements = notes.map((note) => `<li>${note.content}</li>`).join("");
    const html = `<!DOCTYPE html>
                  <html lang="en">
                    <head>
                      <meta charset="UTF-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <title>Document</title>
                    </head>
                    <body>
                      <h1>Notas:</h1>
                      <ol>
                        ${liElements}
                      </ol>
                    </body>
                  </html>`;
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
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
    response.writeHead(404, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ error: "url no encontrada" }));
    response.end();
  }
}

const server = http.createServer(requestListener);
server.listen(5500);
