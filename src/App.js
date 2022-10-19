import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
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
    <Alert alety={alert}/>
    <div className="container">
    <TextForm heading="Enter the the text analyze" mode={mode} />
    <About mode={mode}></About>
        {/* </div> */}
  </div>
  </>
  );
}

export default App;
