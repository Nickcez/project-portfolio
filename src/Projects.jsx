import NyanCat from '/Images/NyanCatProject.png';
import ComingSoon from '/Images/neon-style-coming-soon.png'
import { styled } from 'styled-components';

const Project = () => {
    return (
        <>
        <Ptitle>
            <div className='ptitle'>
            <h2>Projects</h2>
            </div>
        </Ptitle>
        <PImage>
            <div>
            <a href='https://github.com/Nickcez/project-js-nyan-cat.git' target='blank'>
                <img src={NyanCat} width={300}/>
            </a>
            <p>
                A project to practice and learn about Object Oriented Programming.
            </p>
            <a>
                <img src={ComingSoon} width={300}/>
            </a>
            <p>Working on other amazing projects ...</p>
            </div>
        </PImage>
        <Pdescription>
        </Pdescription>
        </>
    );
}
const Ptitle = styled.h2`
font-size: 20px;
color: white;
`;

const Pdescription = styled.div`
    
`;

const PImage = styled.div`
display: block;
justify-content: space-between;

&:focus {
    outline: none;
    border-color: #646cff;
    transition: border-color 0.3s ease-in-out;
}
`;

export default Project;