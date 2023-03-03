import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header';
// import Movie from './Components/Movie';
// import movies from './movie.json'

function App() {
  const [num , setNum] = useState(0);
  function inc(){
    setNum(num + 1)
  }
  function dec(){
    setNum(num - 1)
  }
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <h1 className='heading'>{num}</h1>
        <button className='btn' onClick={inc}>Increment</button>
        <button className='btn' onClick={dec}>Decrement</button>
      </div>
    </div>
  );
}

export default App;