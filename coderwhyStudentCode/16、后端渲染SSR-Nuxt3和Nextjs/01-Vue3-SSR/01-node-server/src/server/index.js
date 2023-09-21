let express = require("express");
let server = express();

server.get("/", (req, res) => {
  res.send(
    `
     Hello Node Server 2000
    `
  );
});

server.listen(3000, () => {
  console.log("start node server on 3000 ~");
});
