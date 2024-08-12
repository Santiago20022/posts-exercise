import { useState, useEffect } from "react";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

function Posts(){
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPosts(posts))
  }, [])

  const handlePostClick = (id) => {
    navigate(`/posts/${id}`);
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <ul className="flex flex-wrap gap-4 justify-center">
        {posts?.map((post) => (
          <li key={post.id} onClick={() => handlePostClick(post.id)} >
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Posts;


