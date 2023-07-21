import './App.css';
import List from './components/list/List';
import AddItem from './components/addItem/AddItem';
import { useState } from 'react';

function App() {
  const bool = true;
  const [item, setItem] = useState(['Item 1', 'Item 2']);

  const onAddHandler =(data)=>{
    setItem(prevState => [...item, data])
    const arr = () => [...item, data]
    console.log();
  }
  let cls = "my-class";
  if(bool){
    cls += " App"
  }
  return (
    // Dynamically Styling 

    // <div className={ bool ? "App": ""}> 
    // <div className={`my-class ${bool  ? "App": ""}`}
    // <div className={`my-class ${bool  && "App"}`}
    // style={{"background-color": "red"}} >
    /* <div className={cls}
    style={{backgroundColor: "orangered"}} > */
    <div>
      <AddItem onAdd={onAddHandler}/>
      <List arr={item}/>
    </div>
  );
}

export default App;
