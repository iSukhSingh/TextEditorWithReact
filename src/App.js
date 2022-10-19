import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  
  const[mode, setMode] = useState('light');
 const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};
  return(
    <>
    {/* <div className="container"> */}
    <Navbar title="Sukh" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <TextForm heading="Enter the the text analyze"/>
    <About></About>
        {/* </div> */}
  </div>
  </>
  );
}

export default App;
