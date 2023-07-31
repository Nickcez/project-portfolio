import { styled } from "styled-components";
import './App.css';

const Header = ({  scrollEffect, homeRef, aboutRef, projectRef, contactRef }) => {
    return (
      <PageContainer>
        <div>
          <button onClick={() => scrollEffect(homeRef)}>Home</button>
          <button onClick={() => scrollEffect(aboutRef)}>About</button>
          <button onClick={() => scrollEffect(projectRef)}>Project</button>
          <button onClick={() => scrollEffect(contactRef)}>Contact</button>
        </div>
      </PageContainer>
    );
  }

const PageContainer = styled.div`
display: block;
position: fixed;
margin: 5px;
top: 0;
left: 0;
width: 50%;
`;



export default Header;