const JsonServer = require("json-server");
const server = JsonServer.create();
const router = JsonServer.router("usuarios.json");
const middlewares = JsonServer.defaults();
const port = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);

server.listen(port);