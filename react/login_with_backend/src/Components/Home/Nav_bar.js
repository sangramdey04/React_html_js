import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
 



export default function Nav_bar(props) {

  const navigate = useNavigate();
  const doc = localStorage.getItem("userinfo") ;
  const name = JSON.parse(doc)?.name

  const logout=(e)=>{
    e.preventDefault();
    
    localStorage.clear();
    navigate("/login")
  }
  return (
    
        <>
        <div className="bar">
          <Navbar bg="dark" variant="dark"  >
            <Container >
              <div className="navbar1">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/" className='linktext'> <Nav.Link href="#home">Home</Nav.Link></Link>
                <Link to="/post" className='linktext' > <Nav.Link href="#post">Post</Nav.Link></Link>
                {/* <Link to="/post" className='linktext'>  Post</Link> */}
                <Link to="/about" className='linktext'>  <Nav.Link href="#pricing">About</Nav.Link></Link>
               
               
              </Nav>
                </div>
            <Navbar.Text>
            <div className="welcome">
            Hi ,<span>{name} </span> 
            <div className="logout">
          <Button variant="outline-danger"  onClick={logout}>Log Out</Button>
          </div>
          </div>
          </Navbar.Text>
            </Container>
          </Navbar>
          </div>
    
        </>
      );
    
  
}
