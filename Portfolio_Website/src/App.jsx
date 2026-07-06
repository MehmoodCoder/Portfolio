import NavBar from './Components/NavBar'
import './App.css'
import { Component } from "react";
import { Routes, Route } from 'react-router-dom'
import About from './Routes/About.jsx'
import Contact from './Routes/Contact.jsx'
import Projects from './Routes/Projects.jsx'


function App() {

  return (
    <>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
