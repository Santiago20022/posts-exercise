import React from 'react'

const Post = ({post}) => {
  return (
    <li className="flex-1 min-w-[300px] border border-gray-300 rounded-lg p-4 bg-white shadow-md" >
      <h2>Body: {post.body}</h2>
      <p>Title: {post.title}</p>
    </li>    
  )
}

export default Post
