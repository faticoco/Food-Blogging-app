

import React from 'react';
import { useState , useEffect } from 'react';
import { Firebasetasks } from '../Firebase/firebasetasks';
import { useUser } from '../Firebase/UserContext';
const BodyStyle = {
    width: '100%',
    height: '100vh',
    padding: '20px',
   backgroundColor: 'Transparent',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };



const cardStyle = {
 backgroundColor: 'white',
 padding: '50px',
 borderRadius: '8px',
 boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
 maxWidth: '300px', // Adjust as needed
 margin: '10px',
 display: 'flex',
 flexDirection: 'column',
};

const postTextStyle = {
 flex: 1,
 marginBottom: '10px',
};

const buttonStyle = {
 backgroundColor: 'transparent',
 border: 'none',
 cursor: 'pointer',
};


function AllPosts() {
  const { userId } = useUser();
  console.log("user id is: " + userId);
 const [posts, setPosts] = useState([]); // State to store fetched posts

 useEffect(() => {
   // Fetch all posts from Firebase when the component mounts
   async function fetchPosts() {
     const firebasetasks = new Firebasetasks();
     const allPosts = await firebasetasks.allposts();
     setPosts(allPosts);
   }

   fetchPosts();
 }, []);




 const handleMakeFavorite = async (postId) => {
  console.log("user id is: " + userId);

  // Call the makefavourite function with the user ID and post ID
  const firebasetasks = new Firebasetasks();
  await firebasetasks.makefavourite(userId, postId);

};

    return (
    <div style={BodyStyle}>
      {posts.map((post) => (
        <div key={post.id} style={cardStyle}>
          <h3 style={postTextStyle}>{post.postText}</h3>
          {/* Heart-shaped button */}
          <button style={buttonStyle} onClick={() => handleMakeFavorite(post.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}


export default AllPosts;
