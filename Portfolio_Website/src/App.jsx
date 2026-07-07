import NavBar from './Components/NavBar/NavBar.jsx'
import './App.css'
import { Component } from "react";
import { Routes, Route } from 'react-router-dom'
import About from './Routes/About.jsx'
import Contact from './Routes/Contact.jsx'
import Projects from './Routes/Projects.jsx'
import Home from './Routes/Home.jsx';


function App() {

  return (
    <>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
