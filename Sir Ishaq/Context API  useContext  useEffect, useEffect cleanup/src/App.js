import { useEffect, useState } from 'react';
import './App.css';
import AuthContext from './context/AuthContext';
import AuthHandler from './components/authHandler/AuthHandler';
import userEvent from '@testing-library/user-event';
// import List from './components/list/List';
// import AddItem from './components/addItem/AddItem';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(()=>{
    console.log("Run");
    setIsAuthenticated(isStorageLoggedIn)
  },[])

  const isStorageLoggedIn = localStorage.getItem("isLoggedIn") !== "0";
  const onLogin = ()=>{
    localStorage.setItem("isLoggedIn", "1")
    setIsAuthenticated(true)
  }
  const onLogout = ()=>{
    localStorage.setItem("isLoggedIn", "0")
    setIsAuthenticated(false)
  }
  return (
    <div className="App">
      <AuthContext.Provider value={{
        isLoggedIn: isAuthenticated,
        onLogin,
        onLogout
        }}>
        <AuthHandler />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
