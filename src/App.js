import logo from "./images/logo.svg";
import mockup from "./images/illustration-mockups.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main>
        <img src= {mockup} className= "image1"/>

        <div className= "content">
            <h1>Build The Community </h1> 
            <h1>    Your Fans Will Love</h1> 
            <p>Huddle re-imagines the way we build communities.  You have 
            a voice, but so does your audience.  Create connections with your 
            users as you engage in genuine discussion.</p> 
            
             <button  >Register</button> 
        </div>
       
      </main>
      
      <footer>
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-twitter"></i> 
      <i className="fab fa-instagram"></i>
      </footer>
    
       
    </div>
  );
}

export default App;
