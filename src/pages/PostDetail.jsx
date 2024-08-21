import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';

const PostDetail = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [postNotFound, setPostNotFound] = useState(false);
 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json() )
      .then(postData => {
        if (postData && Object.keys(postData).length > 0) {
          setPost(postData);
          setPostNotFound(true);
        } else {
          setPost(null);
          setPostNotFound(false);
        }
      });
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(response => response.json())
      .then(commentsData => setComments(commentsData));
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {postNotFound ? (
        <div className="mb-4 p-4">
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              <path fillRule="evenodd" d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            <strong className='text-xl'>Post title</strong>
          </div>
          <h1 className="mb-4 text-2xl font-bold">{post?.title}</h1>
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
            <strong>Description</strong>
          </div>
            <p>{post?.body}</p>
          <div>
            <ul>
            {comments?.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
            </ul>
      </div>
        </div>
      ) : (
        <p className="text-xl font-bold">Post not found</p>
      )}
      
    </div>
  )
}

export default PostDetail
