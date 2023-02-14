 
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
   
}   
from 'react-router-dom';  

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
                  
       </Routes>
       </Router>
    </div>
  );
}

export default App;
