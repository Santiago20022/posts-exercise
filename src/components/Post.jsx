import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetUserById } from '../hooks/useGetUserById'

const Post = ({post}) => {
  const navigate = useNavigate();
  const user = useGetUserById(post.userId)
  const handleClick = () => {
    navigate(`/posts/${post.id}`);
  };
  const handleUserRedirect = (event) => {
    event.preventDefault()
    event.stopPropagation()
    navigate(`/user/${user.id}`)
 }
  return (
    <li className="flex-1 min-w-[300px]  rounded-lg p-4 bg-white shadow-md cursor-pointer" 
      onClick={handleClick} >
      <h1 onClick={handleUserRedirect}>username: {user?.name} </h1>
      <h2>Body: {post.body}</h2>
      <p>Title: {post.title}</p>
    </li>    

  )
}

export default Post
