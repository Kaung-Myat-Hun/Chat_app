import React, { useState } from "react";

function View() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };
  return (
    <div>
      <h3>Join A Chat</h3>
      <input
        type="text"
        placeholder="Dev...."
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Room ID"
        value={room}
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <button onClick={joinRoom}>Join Chat Room</button>
    </div>
  );
}

export default View;
