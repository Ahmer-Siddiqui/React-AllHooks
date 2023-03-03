import React,{useContext} from 'react'
import { AppState , NameContext } from '../App'

const ComC = () => {
    const newAppState = useContext(AppState);
    const newNameContext = useContext(NameContext);
  return (
    <div className="compC">
        <div>ComC</div>
        <h1>{newAppState.data}</h1>
        <h1>{newNameContext.name.name}</h1>
        <h1>{newNameContext.name.age}</h1>
    </div>
  )
}

export default ComC
