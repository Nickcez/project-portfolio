import './App.css';
import MeSunglass from '/Images/thumbnail_Image.jpeg (1).jpg';
import { styled } from 'styled-components';

const About = () => {
    return (
        <>
        <AboutTitle>
            <h2>About Me</h2>
        </AboutTitle>
        <AboutMeP>
            <p>I'm a passionate programmer that loves sports. I play a lot of soccer and basketball whenever I get the chance. I can also proudly say I've honed my skills in HTML, CSS, Javascript and React. This has allowed me to build beautiful websites. </p>
        </AboutMeP>
        <AboutMe>
            <img src={MeSunglass} width={200} />
        </AboutMe>
        </>
    )
}

const AboutMe = styled.div`
border-radius: 1000px;
`;

const AboutMeP = styled.div``;
const AboutTitle = styled.div`
color: white;
font-size: 20px;
`;

export default About;