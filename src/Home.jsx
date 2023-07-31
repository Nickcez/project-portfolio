import reactLogo from './assets/react.svg';
import JsLogo from '/Images/logo-javascript.svg';
import HtmlLogo from '/Images/html-1.svg';
import CSSLogo from '/Images/css-3.svg';
import { styled } from 'styled-components';
import MyFace from '/Images/thumbnail_Image.jpeg.jpg';

const Home = () => {
    return (
    <>
    <Moi>
        <h1>Full Stack Web Developper</h1>
        <h4>Nicolas Césaire</h4>
        <img  src={MyFace} width={300}/>
    </Moi>
    <div>
      <a href="blank" target="_blank">
          <img src={HtmlLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="blank" target="_blank">
          <img src={CSSLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="blank" target="_blank">
          <img src={JsLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
    );
}

const Moi = styled.div`
color: white;
`;

export default Home;