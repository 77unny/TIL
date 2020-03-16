const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === "/index") {
    console.log("index routing");
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (pathname === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ "lists": ["a", "b", "c"] }));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
  }
});

server.listen(8080, () => {
  console.log(`server is running on 8080`);
});
