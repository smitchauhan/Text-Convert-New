import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Textutiles from './Components/Textutiles';

function App() {
  const [mode , setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }

  return (
    <>
   <Navbar title="TextUtiles" newvar = "About Us" mode={mode} togglemode = {toggleMode}/>
<div className="container">
   <Textutiles headline="Enter Text Below"/>
</div>
    </>
  );
}

export default App;
