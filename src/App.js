import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// style
import "./App.css";

// components
import Header from "./components/Header";
import ContactList from "./components/ContactList";

// pages
import Chat from "./pages/Chat";
import Login from "./pages/Login";

import { MessageContext } from "./Context";

function App() {
  const [message, setMessage] = useState([]);

  return (
    <>
      <Header />
      <MessageContext.Provider value={[message, setMessage]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/chat/:userid" element={<Chat />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MessageContext.Provider>
    </>
  );
}

export default App;
