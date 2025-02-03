const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  if(req.url==="/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.url} New Request Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    
    switch(req.url){
        case "/":
            res.end("HomePage");
            break;
        case "/about":
            res.end("Hello I am Shouryya Manna");
            break;
        default:
            res.end("Error 404");
    }
  });
  console.log(req.headers);
});
myServer.listen(8000, () => console.log("Server has stared!"));
