import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetUserById } from '../hooks/useGetUserById'

const User = ({user}) => {
  const navigate = useNavigate();
  const user = useGetUserById(user.userId)
  const handleClick = () => {
    navigate(`/users/${user.id}`);
  };
  return (
    <li className="flex-1 min-w-[300px]  rounded-lg p-4 bg-white shadow-md" 
      onClick={handleClick} >
      <h1>username: {user?.name}</h1>
      <p>public name:{user?.name} </p>
      <p>Department: {user.city}</p>
    </li>

  )
}

export default User
