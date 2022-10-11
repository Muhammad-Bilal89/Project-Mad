import io from "socket.io-client";
const socket = io.connect("http://localhost:3005");

// const send = (msg) => {};

export const sendEvent = (event, data) => {
  socket.emit(event, data);
};
export const joinRoom = (room, username) => {
  if (username !== "" && room !== "") {
    socket.emit("join_room", room);
    // setConn(true);
  }
};

export const listenEvent = (event, cb) => {
  socket.on(event, cb);
};
