// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name="<b>Sumit</b>";
function App() {
  return (
    <>
    <Navbar aboutText="About us"/>
    <div className="container">
    <TextForm heading="Fill The Below From"/>
    </div>
    </>
  );
}

export default App;