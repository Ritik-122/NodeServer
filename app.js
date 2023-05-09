const handler=require('./routes')
const http = require("http");

const server = http.createServer(handler);

server.listen(4000);
