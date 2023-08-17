import React from 'react';
import { auth } from './firebase'; 
import { GoogleAuthProvider, signInWithPopup , signOut  } from 'firebase/auth'; // Import the necessary functions


const HeaderStyle = {
    height: '15vh',
    width: '95%',
    backgroundColor: 'Transparent',
    padding: '20px',
   
    textAlign: 'center',
  };
  

  const NavigationStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily:'Century Gothic',
    marginTop: '10px',
  };
  
  const MenuLinkStyle = {
    marginRight: '15px', // Add space between menu links
    textDecoration: 'none', // Remove underlines from links
    color: '#FFFF', // Link color
  };
  
const SearchContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Align items vertically
  };
  
  const SearchInputStyle = {
    padding: '8px', // Adjust padding for the input
    marginRight: '10px', // Add space between input and button
    border: '1px solid #ccc',
    borderRadius: '15px',
    width: '250px', // Set a minimum width for the input
    color:'white', // Set a color for the input
    backgroundColor: 'Transparent',
   
  };
  
  const ButtonStyle = {
    padding: '10px 20px',
    backgroundColor: 'Transparent',
    color: 'white',
    borderRadius: '20px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    ':hover': {
        color: 'blue', // Change to the desired hover color
      },
  };
  
  const LogoStyle  ={
    width: '7%',
    height: '13vh',
    borderRadius: '30px',
   
  };
  
  const Header = () => {
    

    
    const handleLogout = () => {
      signOut(auth)
        .then(() => {
          console.log('User signed out successfully.');
        })
        .catch((error) => {
          console.error('Logout error:', error);
        });
    };

  
    const handleGoogleSignIn = () => {
      const provider = new GoogleAuthProvider(); // Create a new GoogleAuthProvider
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log('Logged in user:', user.displayName);
        })
        .catch((error) => {
          console.error('Google sign-in error:', error);
        });
    };
    return (
      <div style={HeaderStyle}>
       
         <div style={NavigationStyle}>
         <img
            src="https://i.pinimg.com/236x/82/7d/d3/827dd3e12991bf9c91b50442746cd2af.jpg"
            alt="Logo"
            style={LogoStyle}
          />
        <div>
          <a href="#" style={MenuLinkStyle}>Home</a>
          <a href="#" style={MenuLinkStyle}>My Posts</a>
          <a href="#" style={MenuLinkStyle}>Favorites</a>
          <a onClick={handleGoogleSignIn} style={MenuLinkStyle}>Login</a>
          <a  onClick={handleLogout} style={MenuLinkStyle}>Logout</a>
        </div>
        <div style={SearchContainerStyle}>
          <input type="text" placeholder="Search" style={SearchInputStyle} />
          <div style={ButtonStyle}>Search</div>
        </div>
        </div>
      </div>
    );
  };

export default  Header;