import React from 'react';
import Nav from './components/Navbar/Navbar';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
// import "./output.css";

export default function App() {
  return (
    <>
    <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    <Footer />
    </>
  );
}