import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Footer from './components/Footer'
import Typo from './components/pages/Typo';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}>
            {/* <Route path="/projects/:title" element={<Project />}></Route> */}
          </Route>
          <Route path="/projects/typo" element={<Typo />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>

      
    </>
  );
}

export default App;
