//// Express Module using Promises
const express = require("express");
const { readFile } = require("fs").promises;

const app = express();

app.get("/", async (request, response) => {
  response.send(await readFile("./home.html", "utf8"));
});
