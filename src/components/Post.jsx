import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = ({post}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <li className="flex-1 min-w-[300px] border border-gray-300 rounded-lg p-4 bg-white shadow-md" 
      onClick={handleClick} >
      <h2>Body: {post.body}</h2>
      <p>Title: {post.title}</p>
    </li>    
  )
}

export default Post
