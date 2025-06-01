import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import './index.css'; 

function App() {
  // Theme state
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme-dark');
    return stored === null ? true : stored === 'true';
  });
  useEffect(() => {
    localStorage.setItem('theme-dark', dark);
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <div className={`min-h-screen ${dark ? 'bg-black' : 'bg-white'} transition-colors duration-800`}>
      <Navbar
        dark={dark}
        toggleTheme={toggleTheme}/>
        <Home dark={dark} />
        <Footer dark={dark} />
    </div>
  );
}

export default App;