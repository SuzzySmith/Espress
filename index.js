const express = require("express");

const Kali = express();

Kali.get("/", (request, response) => {
  response.status(200).send("<h1>Hello Moses</h1>");
});

Kali.listen(1234, () => {
  console.log("server is running");
});
