var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://cdn.socket.io/socket.io-3.0.1.min.js";
document.querySelector("head").append(s);
var socket = io("http://localhost:3001");
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
