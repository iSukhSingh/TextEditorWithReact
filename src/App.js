import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");

    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");


    }
};
  return(
    <>
   
    {/* <div className="container"> */}
    <Router>
    <Navbar title="Sukh" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
       <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Text Editor" mode={mode}/>
          </Route>
    </Switch>
      
        {/* </div> */}
  </div>
  </Router>
  </>
  );
}

export default App;
