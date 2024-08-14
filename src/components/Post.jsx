import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetUserById } from '../hooks/useGetUserById'

const Post = ({post}) => {
  const navigate = useNavigate();
  const user = useGetUserById(post.userId)
  const handleClick = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <li className="flex-1 min-w-[300px] border border-gray-300 rounded-lg p-4 bg-white shadow-md" 
      onClick={handleClick} >
      <h1>username: {user.name} </h1>
      <h2>Body: {post.body}</h2>
      <p>Title: {post.title}</p>
    </li>    

  )
}

export default Post
