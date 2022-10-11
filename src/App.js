import React, { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Chat";
import { joinRoom } from "./socket";

// const socket = io.connect("http://localhost:3005");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [conn, setConn] = useState(false);
  const [val, setVal] = useState(false);
  const joinUrRoom = async () => {
    // if (username !== "" && room !== "") {
    //   socket.emit("join_room", room);
    //   setConn(true);
    // }
    await joinRoom(username, room);
    setConn(true);
  };

  return (
    <div className="App">
      <h3>Join Chat</h3>
      <div className="login-page">
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input placeholder="room" onChange={(e) => setRoom(e.target.value)} />
        <button onClick={joinUrRoom}>Join</button>
        {/* <div className="login-btn">
          {val ? (
            <>
              <button onClick={joinUrRoom} onMouseEnter={() => setVal(!val)}>
                Join
              </button>
              <div style={{ width: "80px" }}></div>
            </>
          ) : (
            <>
              <div style={{ width: "80px" }}></div>
              <button onClick={joinUrRoom} onMouseEnter={() => setVal(!val)}>
                Join
              </button>
            </>
          )}
        </div> */}
      </div>
      {conn ? <Chat username={username} room={room} /> : ""}
    </div>
  );
}

export default App;
