import React from 'react'
import { useUserId } from '../hooks/useUserId';

const Post = ({post}) => {
  const user = useUserId(post.userId);
  return (
    <li className="flex-1 min-w-[300px] border border-gray-300 rounded-lg p-4 bg-white shadow-md" >
      <h2> {post.title} </h2>
      <p>Posted by: { user && post.Id}</p>
      <p> {post.body} </p>
    </li>    

  )
}

export default Post
