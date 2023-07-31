import { styled } from "styled-components";
import './App.css';

const Header = ({  scrollEffect, homeRef, aboutRef, projectRef, contactRef }) => {
    return (
      <PageContainer>
        <div className='header'>
          <button onClick={() => scrollEffect(homeRef)}>Home</button>
          <button onClick={() => scrollEffect(aboutRef)}>About</button>
          <button onClick={() => scrollEffect(projectRef)}>Project</button>
          <button onClick={() => scrollEffect(contactRef)}>Contact</button>
        </div>
      </PageContainer>
    );
  }

const PageContainer = styled.div `
display: flex;
`;

export default Header;