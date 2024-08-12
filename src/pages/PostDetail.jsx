import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(postData => setPost(postData));
  }, [id]);



  return (
    <div >
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}

export default PostDetail