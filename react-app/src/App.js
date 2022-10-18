import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return(
    <>
    <Navbar title="Sukh" />
    <div className="container">
    <TextForm heading="enter the the text analyze"/>
        </div>
  </>
  );
}

export default App;
