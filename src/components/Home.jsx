import React from 'react'
import { useContext } from 'react'
import UserProvider from '../context/UserContext'

const Home = () => {
  const { user } = useContext(UserProvider)
  console.log(user);
  
  return (
   <div>
    <h1>home</h1>
    <p>Valor del contexto: {user}</p>
   </div>
    
  );
}

export default Home
