const net = require("net");

const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptSync = require("prompt-sync");

const prompt = promptSync();

let running = true;

while (running) {
  let server = prompt("Which chat room? 1, 2 or 3? ", );
  if (parseInt(server) <= 0 || parseInt(server) > 3) {
    console.log("That is not a valid choice. Try again. ");
  } else if (parseInt(server) === 1) {
    running = false;
    let username = prompt("Enter your username to join the chat: ");
    const socket = net.connect({
      port: 1234,
    });
    console.log(
      `You have entered the chat as ${username}. Type "quit" to exit. Happy chatting!`
    );
    socket.on("connect", () => {
      socket.write(`${username} has joined the chat.`);
    });

    readLine.on("line", (data) => {
      if (data === "quit") {
        socket.write(`${username} has left the chat`);
        socket.setTimeout(1000);
      } else {
        socket.write(`${username}: ${data}`);
      }
    });

    socket.on("data", (data) => {
      console.log("\x1b[33m%s\x1b[0m", data);
    });

    socket.on("timeout", () => {
      socket.write("quit");
      socket.end();
    });

    socket.on("end", () => {
      process.exit();
    });

    socket.on("error", () => {
      console.log("The server seems to have been shut down...");
    });
  } else if (parseInt(server) === 2) {
    running = false;
    let username = prompt("Enter your username to join the chat: ");
    running = false;
    const socket = net.connect({
      port: 5678,
    });
    console.log(
        `You have entered the chat as ${username}. Type "quit" to exit. Happy chatting!`
      );
    socket.on("connect", () => {
      socket.write(`${username} has joined the chat.`);
    });

    readLine.on("line", (data) => {
      if (data === "quit") {
        socket.write(`${username} has left the chat`);
        socket.setTimeout(1000);
      } else {
        socket.write(`${username}: ${data}`);
      }
    });

    socket.on("data", (data) => {
      console.log("\x1b[33m%s\x1b[0m", data);
    });

    socket.on("timeout", () => {
      socket.write("quit");
      socket.end();
    });

    socket.on("end", () => {
      process.exit();
    });

    socket.on("error", () => {
      console.log("The server seems to have been shut down...");
    });
  } else if (parseInt(server) === 3) {
    running = false;
    let username = prompt("Enter your username to join the chat: ");
    running = false;
    const socket = net.connect({
      port: 4321,
    });
    console.log(
        `You have entered the chat as ${username}. Type "quit" to exit. Happy chatting!`
      );
    socket.on("connect", () => {
      socket.write(`${username} has joined the chat.`);
    });

    readLine.on("line", (data) => {
      if (data === "quit") {
        socket.write(`${username} has left the chat`);
        socket.setTimeout(1000);
      } else {
        socket.write(`${username}: ${data}`);
      }
    });

    socket.on("data", (data) => {
      console.log("\x1b[33m%s\x1b[0m", data);
    });

    socket.on("timeout", () => {
      socket.write("quit");
      socket.end();
    });

    socket.on("end", () => {
      process.exit();
    });

    socket.on("error", () => {
      console.log("The server seems to have been shut down...");
    });
  }
}
