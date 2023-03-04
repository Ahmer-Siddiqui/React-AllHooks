import './App.css';
import Header from './Components/Header';
import React , { useState, useEffect , useRef} from 'react';

function App() {
    const [input, setInput] = useState("");
    // const counter = useRef(0);
    // const prevState = useRef("");
    const inputField = useRef();

    // useEffect(()=>{
    //     // counter.current = counter.current + 1;
    //     // prevState.current = input;
    // })
    const formHandler = (e) =>{
            setInput(e.target.value);
        }
        const clickHandler = ()=>{
            // inputField.current.focus();
            inputField.current.value = "Ahmer";
        }
  return (
    <div className="App">
        <Header />
        <input ref={inputField} value={input} onChange={formHandler} />
        {/* <h4>Application has been rendered {counter.current} times</h4> */}
        {/* <h4>previous was {prevState.current}</h4> */}
        <button onClick={clickHandler}>Click Me</button>
      
    </div>
  );
}

export default App;
