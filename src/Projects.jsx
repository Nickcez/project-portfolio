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
            <div className="pImage">
            <img src={NyanCat} width={300}/>
            <p>
                A project to practice and learn about Object Oriented Programming.
            </p>
            <img src={ComingSoon} width={300}/>
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
display: flex;
justify-content: space-between;
`;

export default Project;