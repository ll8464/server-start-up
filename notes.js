//console.log('hello world 🙌');
//console.log(process.platform);
//console.log(process.env.USER);

// process.on("exit", function () {
//   //do something
// });

////EventEmitters

// const { EventEmitter } = require("events");

// const eventEmitter = new EventEmitter();

// eventEmitter.on("lunch", () => {
//   console.log("yum 🍣");
// });

// eventEmitter.emit("lunch");
// eventEmitter.emit("lunch");

//Synchrous Call to txt file

// const { readFile, readFileSync } = require("fs");

// const txt = readFileSync("./hello.txt", "utf8");
// console.log(txt);
// console.log("do this ASAP");

//Asynchrous Call to Same txt File using Callbacks
// const { readFile, readFileSync } = require("fs");
// readFile("./hello.txt", "utf8", () => {
//   console.log(txt);
// });

// const txt = readFileSync("./hello.txt", "utf8");

// console.log("do this ASAP"); // <--- this will display first since readFile is asynchronous

////Asynchrous Call to Same txt File using Promises

// const { readFile } = require("fs").promises;

// async function hello() {
//   const file = await readFile("./hello.txt", "utf-8");
// }

// //// Modules

// const myModule = require("./my-module");

// console.log(myModule);

//// Express Module using callbacks
// const express = require("express");
// const { readFile } = require("fs");

// const app = express();

//app.get("/foo/bar");

// app.get("/", (request, response) => {
//   readFile("./home.html", "utf-8", (err, html) => {
//     if (err) {
//       response.status(500).send("sorry, out of order");
//     }
//     response.send(html);
//   });
// });

// app.listen(process.env.PORT || 3000, () =>
//   console.log(`App available on http://localhost:3000`)
// );
