import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// style
import './App.css';

// components
import Header from './components/Header';
import ContactList from './components/ContactList';

// pages
import Chat from './pages/Chat';

function App() {
  const { chat, setChat} = useState({});
  
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>  
          <Route path='/' element={<ContactList />} />
          <Route path='/chat/:id' element={<Chat />} />
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
