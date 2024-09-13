import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import socket from "./socket";
// components
import Header from "./components/Header";

// pages
import { Chat, CreateRoom, Login } from "./pages";

// context
import { MessageContext } from "./Context";
import RoomList from "./components/RoomList";

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    socket.on("new-message", (receivedMessage) => {
      setMessage((prevMessages) => [...prevMessages, receivedMessage]);
    });
  }, [socket]);

  return (
    <>
      <BrowserRouter>
        <MessageContext.Provider value={message}>
        <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat/:roomId" element={<Chat setMessage={setMessage} />} />
            <Route path="/create-room" element={<CreateRoom />} />
            <Route path="/room-list" element={<RoomList />} />
          </Routes>
        </MessageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
