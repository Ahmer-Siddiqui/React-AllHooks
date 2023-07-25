import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext'

const Home = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <button onClick={authCtx.onLogout}>Logout</button>
    </div>
  )
}

export default Home