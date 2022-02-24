import React from 'react';
import Skills from './components/Skills'
import About from './components/About'
import Work from './components/Work'
import Home from './components/Home'
import Contact from './components/Contact'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <div>
      
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/skills"> Skills </Link>
        <Link to="/work"> Work </Link>
        
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      
        
      </div>
    </Router>   
    
  );
}

export default App;
