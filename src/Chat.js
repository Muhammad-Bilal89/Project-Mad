import React, { useEffect, useState } from "react";
import { listenEvent, sendEvent } from "./socket";

export default function Chat({ username, room }) {
  const [msg, setMsg] = useState("");
  const [all, setAll] = useState([]);
  useEffect(() => {
    // socket.on("recieve-msg", (data) => {
    //   console.log("run...");
    //   setAll((list) => [...list, data]);
    // });
    listenEvent("recieve-msg", (data) => {
      setAll([...all, data]);
    });
  }, []);
  console.log(all);
  const sendMessage = async () => {
    if (msg !== "") {
      const msgData = {
        room,
        author: username,
        msg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      sendEvent("send-msg", msgData);
      //   await  socket.emit("send-msg", msgData);
    }
  };
  return (
    <div>
      <div className="chat-head">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        {all.map((ms) => (
          <p>{ms.msg}</p>
        ))}
      </div>
      <div className="chat-foot">
        <input placeholder="hey..." onChange={(e) => setMsg(e.target.value)} />
        <button onClick={(e) => sendMessage()}>{">"}</button>
      </div>
    </div>
  );
}
