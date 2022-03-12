import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {About} from './About'
import {Home} from './Home'
import {Contact} from './Contact'
import {Projects} from './Projects'
/*import SocialMedia from '../miniComponents/SocialMedia'*/

export const Bar = () => {
  return (
    <BrowserRouter> 
    <div className="App">
      <>
  <Navbar  
  fixed={'top'}
    className={'position-sticky ps-0', 'navbarr'}
    >
    <Container>
    <Navbar.Brand href="/home">AM</Navbar.Brand>
     
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/About">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
    </Nav>
    </Container>
  </Navbar>



    <br/>
    <br/>
    <br/>
    <br/>
    


  <div>
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
  </div>
  
</>
      
    </div>
    </BrowserRouter>
  )
}

