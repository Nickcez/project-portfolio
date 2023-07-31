import GitHubLogo from '/Images/GitHub-Logos/GitHub_Logo_White.png'
import { styled } from 'styled-components';

const Contact = ({ contactRef }) => {
    return (
        <>
        <div targetRef={contactRef}>
            <ContactHeading>
                <h2>Contact Me</h2>
            </ContactHeading>
            <p className="read-the-docs">
            <p>If you feel that I can help your business or that you'd just love to work with me. Looking forward to working with you on your great project!</p>
            <p>Feel free to contact me</p>
            <p>Email: n.cesaire@outlook.com</p>
            <p>Phone: 514-947-5385</p>
            <a href='https://github.com/Nickcez' target='blank'><img src={GitHubLogo} className='gitLink' alt='Git Link'/></a>
            </p>
        </div>
        </>
    );
}

const ContactHeading = styled.h2`
text-align: left;
color: white;
`;
export default Contact;