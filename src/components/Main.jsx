import React, { useState } from 'react'
import { Toggle } from './Toggle'
import me from '../Assets/PORTFOLIO IMG.png'
import "./main.css"
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import cv from '../Assets/CV/mysamplecv.pdf'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { motion } from 'framer-motion'


// import { createContext } from 'react';


// export const ThemeContext = React.createContext(null)

function Main() {
  const [theme, settheme] = useState("light")
  const toggletheme = () => {
    settheme((curr) => (curr === "dark" ? "light" : "dark"))
  }
  return (
    <>
     <Navbar expand="lg" className="nav" fixed="top">
      <Container className='navcontainer'>
        <Navbar.Brand href="#home" className='navname'><span style={{color:"green"}}>AK</span> Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className='navname'>About</Nav.Link>
            <Nav.Link href="#skills" className='navname'>Skills</Nav.Link>
            <Nav.Link href="#projects" className='navname'>Projects</Nav.Link>
            <Nav.Link href="#contact" className='navname'>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Toggle handleChange={toggletheme} isChecked={theme === "dark"} />
    <div className="App" id={theme}>
   


        <motion.div 
          className='hero-container'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='myname '>
            <motion.h1 
              className="title"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi Iam Abhay Krishnan
            </motion.h1>
            <motion.h2 
              style={{color:"red"}}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Web Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span style={{color:"green"}}>THIS</span> IS MY OFFICIAL PORTFOLIO WEBSITE TO DESCRIBE ALL <br />
              DETAILS AND WORK EXPERIENCE WEB DEVELOPMENT.
            </motion.p>
            <motion.a 
              className="download" 
              href={cv} 
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DOWNLOAD/VIEW CV
            </motion.a>
          </div>
            
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img src={me} alt="" className='me'/>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Skills/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Projects/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Contact/>
        </motion.div>
      </div>
      
    </>


  )
}

export default Main