import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
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

const CardStyle = {
    background: 'linear-gradient(to right, #185673, #d184cf)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '70%',
    margin: '0 auto',
    color: 'white',
  };
  

const ImageInputStyle = {
  margin: '10px 0',
};

const ButtonStyle = {
  padding: '10px 20px',
  backgroundColor: 'Transparent',
  color: 'white',
  borderRadius: '20px',
  border: '3px solid #ccc',
  cursor: 'pointer'
};

const AddPosts = () => {
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const { userId } = useUser();
  console.log("user id is: " + userId);
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };


  const HandleUploadPost = async () => {
   
   
    const firebasetasks = new Firebasetasks();
    await firebasetasks.addpost(postText, selectedImage , userId );
  };





  return (
    <div style={BodyStyle}>
      
      <div style={CardStyle}>
        <h2>Create a New Post</h2>
        <textarea
        placeholder="Enter your post text..."
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        style={{
            width: '100%',
            minHeight: '250px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginTop: '10px',
        }}
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          style={ImageInputStyle}
        />
        <br></br>
        <button onClick={HandleUploadPost} style={ButtonStyle}>
          Upload Post
        </button>
      </div>
    </div>
  );
};

export default AddPosts;
