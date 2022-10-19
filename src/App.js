import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return(
    <>
    <div className="container">
    <Navbar title="Sukh" />
    <div className="container">
    <TextForm heading="E nter the the text analyze"/>
        </div>
  </div>
  </>
  );
}

export default App;
