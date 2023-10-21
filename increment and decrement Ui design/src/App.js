import "./App.css";
import Header from "./component/Header";
// import Tv from './component/Tv';
// import Show from './Show.json'
import React, {useState} from "react";

function App() {
  const [num, setNum]=useState(1);

  function inc(){
    setNum(num+1);
  }

  function dec(){
    setNum(num-1);
  }

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <h1 className='heading'>{num}</h1>
        <div className='buttons'>
          <button className='btn' onClick={inc}>Increment</button>
          <button className='btn' onClick={dec}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
