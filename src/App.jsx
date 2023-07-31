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
  const contactRef = useRef();
  const scrollEffect = (targetRef) => {
	targetRef.current.scrollIntoView({ 
    behavior: "smooth"
  });
}


  return (
    <>
    <PageContainer>
      <Header 
      scrollEffect={scrollEffect}
      homeRef={homeRef}
      aboutRef={aboutRef}
      projectRef={projectRef}
      contactRef={contactRef}
      />
    </PageContainer>
    <Wrapper>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
    </Wrapper>
    </>
  );
}

const PageContainer = styled.div `
display: flex;
`;

const Wrapper = styled.div `
`;

export default App;
