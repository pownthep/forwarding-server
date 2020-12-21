var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("togglePause", (msg) => {
    console.log(msg);
    io.emit("pause", msg.value);
  });
  socket.on("seek", (msg) => {
    console.log(msg);
    io.emit("seek", msg.value);
  });
});

http.listen(process.env.PORT || 3001, () => {
  console.log("listening on *:3001");
});
