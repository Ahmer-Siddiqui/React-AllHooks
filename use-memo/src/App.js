import { useState , useMemo } from 'react';
import Header from './Components/Header';
import './App.css';

function App() {
  const [count , setCount] = useState(0);
  const [name , setName] = useState('');

  const expensiveCalculation = (num) =>{
    for(let i = 0; i < 1000000000; i++){}
    return num;          
  };

  const calculation = useMemo( ()=> {
    expensiveCalculation(count)
  },[name]);
  return (
    <div className="App">
      <Header />
      <button onClick={(e)=> setCount(count + 1)}>Increment</button>
      <h1>Count: {count}</h1>

      <input onChange={(e) => setName(e.target.value)} />
      <h1>Name: {name}</h1>
    </div>
  );
}

export default App;
