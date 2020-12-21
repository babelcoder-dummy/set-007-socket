import io from "socket.io";
import http from "http";

const server = http.createServer();
const ws = io(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

ws.on("connection", (socket) => {
  console.log("user connected");

  socket.on("chat message", (msg) => {
    ws.emit("chat message", { text: msg });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
