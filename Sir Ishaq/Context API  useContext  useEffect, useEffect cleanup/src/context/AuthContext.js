import { createContext } from 'react';
const AuthContext = createContext({
    isLoggedIn: false,
    onLogin: ()=>{}, // work similar as onLogin: onLogin but we do this for intellisense 
    onLogout: ()=>{}, // work similar as onLogin: onLogin but we do this for intellisense 
});

export default AuthContext;