import './App.css';
import Header from './Components/Header';
import { useState , createContext } from 'react';
import ComA from './Components/ComA';

const AppState = createContext();
const NameContext = createContext();

function App() {
  const [data , setData] = useState("Ahmer")
  const [name , setName] = useState({name: 'shahzar',age:20});

  return (
    <>
      <AppState.Provider value={{data}}>
      <NameContext.Provider value={{name}}>
        <div className="App">
          <Header />
          <ComA data={data}/>
        </div>
      </NameContext.Provider> 
      </AppState.Provider> 
    </>
  );
}
export {AppState , NameContext}
export default App;
