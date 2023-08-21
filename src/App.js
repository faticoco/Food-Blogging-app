

 import Header from './Components/header';
 import Posts from './Components/Myposts'; // Import your MyPosts component
 import AddPosts from './Components/Addposts';
 import Favorites from './Components/Favourites';
 import AllPosts from './Components/AllPosts';
 import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
 import { UserProvider } from './Components/Firebase/UserContext';

const BodyStyle = {
  width: '100%',
  height: '100vh',
  padding: '20px',
  border: '1px solid #ccc',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat', 
  backgroundImage: `url('https://images.unsplash.com/photo-1627664819818-e147d6221422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80')`,
 };



 
 function App() {



   return (
    <UserProvider>
     <Router>
       <div style={BodyStyle} className="App">
         <Header></Header>
 
         <Routes>
          
           <Route path="/favourites" element={<Favorites />} />
           <Route path="/posts" element={<Posts />} />
           <Route path="/addposts" element={<AddPosts />} />
           <Route path="/allposts" element={<AllPosts />} />

         </Routes>
       </div>
     </Router>
   
     </UserProvider>
     
   );
 }
 
 
 export default App;
 