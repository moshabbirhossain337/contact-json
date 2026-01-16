const db = require("./db.js");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(db);
const middleware = jsonServer.defaults();

const PORT = process.env.PORT || 8000;
server.use(middleware);
server.use(router);

server.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
