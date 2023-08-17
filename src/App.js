import Header  from "./Components/header";

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
    <div className="App">
     
     <div  style={BodyStyle}>
    
     <Header></Header>
 
    
     </div>
     
    
     
   

    </div>
  );
}

export default App;
