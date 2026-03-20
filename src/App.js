import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Textutiles from './Components/Textutiles';
import About from './Components/About';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Components/Contact';
import News from './Components/News';


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtiles" newvar="About Us" mode={mode} togglemode={toggleMode} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <Textutiles headline="Enter Text Below" />
            } />
            <Route exact path="/about" element={
              <About />
            } />
            <Route exact  path="/contact" element={
              <Contact />
            } />
            <Route exact  path="/news" element={
              <News/>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
