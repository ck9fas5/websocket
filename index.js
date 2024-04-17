const express = require("express");
const http = require("http");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const socket = require("socket.io");

let list_user = [];
let list_message = [];

const server = http.createServer(app);
const io = new socket.Server(server);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(express.static("public"));

app.post("/check_user", (req, res) => {
  let name = req.body.name;
  console.log(name);
  if (list_user.find((n) => n == name) === undefined) {
    list_user.push(name);
    res.json({ result: "ok" });
  } else res.json({ result: "occupato" });
});

app.get("/get_message", (req, res) => {
  res.json({ result: list_message });
});

io.on("connection", (socket) => {
  console.log("new user");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("message", (message) => {
    console.log(message)
    let date = new Date();
    let year = date.getFullYear();
    let mounth = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours() + 2;
    //console.log(date);
    let minut = date.getMinutes();
    message["time"] =
      hour + ":" + minut + " " + day + "/" + mounth + "/" + year;
    list_message.push(message);
    io.emit("update", message);
  });
});

server.listen(4000, () => {
  console.log("server running");
});
