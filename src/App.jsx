import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useRef } from 'react'
import './App.css'
import Header from './Header';
import Home from './Home'
import About from './About';
import Project from './Projects'
import Contact from './Contact';
import styled from 'styled-components';




const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const scrollEffect = (targetRef) => {
	targetRef.current.scrollIntoView({ 
    behavior: "smooth"
  });
}


  return (
    <>
    <PageContainer>
    <div>
          <button onClick={() => scrollEffect(homeRef)}>Home</button>
          <button onClick={() => scrollEffect(aboutRef)}>About</button>
          <button onClick={() => scrollEffect(projectRef)}>Project</button>
          <button onClick={() => scrollEffect(contactRef)}>Contact</button>
        </div>
      {/* <Header 
      scrollEffect={scrollEffect}
      homeRef={homeRef}
      aboutRef={aboutRef}
      projectRef={projectRef}
      contactRef={contactRef}
      /> */}
    </PageContainer>
    <Wrapper>
      <div ref={homeRef}>
      <Home />
      </div>
      {/* <Home ref={homeRef} /> */}
      <div ref={aboutRef}>
      <About  />
      </div>
      <div ref={projectRef}>
      <Project />
      </div>
      <div ref={contactRef}>
      <Contact />
      </div>
      
    </Wrapper>
    </>
  );
}

const PageContainer = styled.div `
display: flex;
position: fixed;
margin: 5px;
top: 0;
left: 0;
`;

const Wrapper = styled.div `
`;

export default App;
