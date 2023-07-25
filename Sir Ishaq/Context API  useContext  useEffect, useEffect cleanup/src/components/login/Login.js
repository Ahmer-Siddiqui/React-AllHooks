import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [isValid, setIsValid] = useState("");
  useEffect(()=>{
    console.log("useeffect");
    const timeout = setTimeout(() => {
      console.log("useeffect in settimeout");
      setIsValid(data.length > 6)
    }, 2000);
    return ()=>{
      clearTimeout(timeout)
    }
  },[data])
  const onTextChange = (e)=>{
    setData(e.target.value);
    validate();
  }
  const data1Change = (e)=>{
    setData1(e.target.value);
  }
  const validate = (e)=>{
    console.log("Validation");
    setIsValid(data.length > 6)
  }
  return (
    <div>
      <input type="text" onChange={onTextChange} value={data}/>
      {isValid ? "Valid" : "InValid"}
      <input type="text" onChange={data1Change} value={data1}/>
      <button onClick={authCtx.onLogin}>Login</button>
    </div>
  )
}

export default Login
