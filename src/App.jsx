import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BubbleBackground from "./components/BubbleBackground";

import Home from "./components/Home";
import Center from "./components/Center";
import Programs from "./components/Programs";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Academic from "./components/Academic";
import Games from "./components/Games";
import Carerrs from "./components/Carerrs";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      {/* Common Background All Pages */}
      <BubbleBackground />

      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/center" element={<Center />} />
        <Route path="/programs" element={<Programs/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/games" element={<Games />} />
        <Route path="/carerrs" element={<Carerrs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;