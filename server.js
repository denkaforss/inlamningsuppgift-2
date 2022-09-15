const net = require("net");

let sockets = [];
let sockets2 = [];
let sockets3 = [];

const server = net.createServer((socket) => {
  sockets.push(socket);
  console.log("Client connected.");

  socket.on("data", (data) => {
    broadcast(data, socket, "array1");
  });

  socket.on("error", (err) => {
    console.log("A client has disconnected.");
  });

  socket.on("close", () => {
    console.log("A client has left the chat.");
  });
});

const server2 = net.createServer((socket) => {
  sockets2.push(socket);
  console.log("Client connected.");

  socket.on("data", (data) => {
    broadcast(data, socket, "array2");
  });

  socket.on("error", (err) => {
    console.log("A client has disconnected.");
  });

  socket.on("close", () => {
    console.log("A client has left the chat.");
  });
});

const server3 = net.createServer((socket) => {
  sockets3.push(socket);
  console.log("Client connected.");

  socket.on("data", (data) => {
    broadcast(data, socket, "array3");
  });

  socket.on("error", (err) => {
    console.log("A client has disconnected.");
  });

  socket.on("close", () => {
    console.log("A client has left the chat.");
  });
});

server.listen(1234);
server2.listen(5678);
server3.listen(4321);

const broadcast = (message, socketSent, currentArray) => {
  if (currentArray === "array1") {
    if (message.toString() === "quit") {
      const index = sockets.indexOf(socketSent);
      sockets.splice(index, 1);
    } else {
      sockets.forEach((socket) => {
        if (socket !== socketSent) socket.write(message);
      });
    }
  } else if (currentArray === "array2") {
    if (message.toString() === "quit") {
      const index = sockets2.indexOf(socketSent);
      sockets2.splice(index, 1);
    } else {
      sockets2.forEach((socket) => {
        if (socket !== socketSent) socket.write(message);
      });
    }
  } else if (currentArray === "array3") {
    if (message.toString() === "quit") {
      const index = sockets3.indexOf(socketSent);
      sockets3.splice(index, 1);
    } else {
      sockets3.forEach((socket) => {
        if (socket !== socketSent) socket.write(message);
      });
    }
  }
};
