import { useState, useEffect } from "react";

function Posts(){
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPosts(posts))
  }, [])
  console.log(posts)
  return (
    <>
    </>
  )
}
export default Posts;
