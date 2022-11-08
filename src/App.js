import React from 'react';
import Nav from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import "./index.css";
// import "./output.css";

export default function App() {
  return (
    <>
    <Nav />
    <About />
    <Footer />
    </>
  );
}