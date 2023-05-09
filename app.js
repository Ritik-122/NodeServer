const fs = require("fs");
const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("message.txt", (err, data) => {
      if (err) {
        console.log(err);
      } else {
    
        res.write("<html>");
    
        res.write(
          `<body><h5>${data}</h5></br><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>`
        );
        res.write("</html>");
      }
    });
  }
 else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      let parsedBody = Buffer.concat(body).toString();
      let message = parsedBody.split("=")[1]+'</br>';

      fs.writeFileSync("message.txt", message, { flag: "a" })
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      
    });
  }
});

server.listen(4000);
