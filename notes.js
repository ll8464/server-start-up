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

//// Express Module using Promises

// const express = require("express");
// const { readFile } = require("fs").promises;

// const app = express();

// app.get("/", async (request, response) => {
//   response.send(await readFile("./home.html", "utf8"));
// });

// app.listen(process.env.PORT || 3000, () =>
//   console.log(`App available on http://localhost:3000`)
// );

//Server start up using http module

// let http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//   })
//   .listen(8080);

//Server start up using http module
////Below practices using custom (Date) and non custom (url) modules

// let http = require("http");
// let dt = require("./date-module");
// let url = require("url");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.write(req.url);
//     let q = url.parse(req.url, true).query;
//     let txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

////File System
////The appendFile() appends specified content to a file, if the file does not exists, it will create the file.
// let fs = require("fs");

// fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

////appendFile() adds text to the end of the file.
//// writeFile() replaces the specified file and content.

////Delete existing File
// let fs = require("fs");

// fs.unlink("mynewfile2.txt", function (err) {
//   if (err) throw err;
//   console.log("file deleted!");
// });

////File Server
// let fs = require("fs");
// let http = require("http");
// let url = require("url");

// http
//   .createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;

//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("404 Not Found");
//       }

//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);
