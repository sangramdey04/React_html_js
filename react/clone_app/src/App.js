 
// import './App.css';
import Sidebar from './components/side_menu/Sidebar';
import Login from './Page/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Page/Register/Register';
import Home from './Page/Home/Home';

import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
import CreatePost from './Page/CreatePost/CreatePost';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={ <Register/>} />
           <Route path='/create' element={<CreatePost/>}/>
        </Route>
      </Routes>
    </Router>
    
   
    </div>
  );
}

export default App;
