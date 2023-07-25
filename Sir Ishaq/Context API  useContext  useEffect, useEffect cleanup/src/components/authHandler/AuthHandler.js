import { useContext } from "react";
import Home from "../home/Home";
import Login from "../login/Login";
import AuthContext from "../../context/AuthContext";

const AuthHandler = ({onLogin, onLogout})=>{
    const authCtx = useContext(AuthContext);
    return  authCtx.isLoggedIn ? <Home onLogout={onLogout}/> : <Login onLogin={onLogin}/>

}

export default AuthHandler;