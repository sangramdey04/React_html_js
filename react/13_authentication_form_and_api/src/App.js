import "./App.css";
import Form from "./component/form/Form.js";
 
 import {
  BrowserRouter as Router,
  Route,
  Routes,
  
 } from "react-router-dom"
import LoginForm from "./component/form/LoginForm";
import { Login1 } from "./component/Login1";


function App() {
  return (
       
    <div className="App">
       <Router>
        <Routes>
          <Route exact path="/" element={<Form/>}/>
          <Route exact path="/login" element={<LoginForm/>}/>
          <Route exact path="/login1" element={<Login1/>}/>
        </Routes>
       </Router>
        
       
    </div>
      
  );
}

export default App;
