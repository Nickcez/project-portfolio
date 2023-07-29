import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import JsLogo from '/Images/logo-javascript.svg'
import HtmlLogo from '/Images/html-1.svg'
import CSSLogo from '/Images/css-3.svg'
import './App.css'
import Project from './Projects'
import Home from './Home'
import GitHubLogo from '/Images/GitHub-Logos/GitHub_Logo_White.png'


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='header'>
      <h3><a>Home</a></h3>
      <h3><a>About</a></h3>
      <h3><a>Project</a></h3>
      <h3><a>Contact</a></h3>
    </div>
    <div className='HeroMan'>
      <h1>Full Stack Web Developper</h1>
      <p>Nicolas Césaire A not so famous pevious Soccer player turned (aspiring) programmer </p>
    </div>
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
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
      <h2>Contact Me</h2>
      <p>If you feel that I can help your business or that you'd just love to work with me.</p>
      <p>Feel free to contact me</p>
      <p>Email: n.cesaire@outlook.com</p>
      <p>Phone: 514-947-5385</p>
      <a href='https://github.com/Nickcez' target='blank'>
        <img src={GitHubLogo} className='gitLink' alt='Git Link'/>
      </a>
      </p>
    </>
  );
}

export default App;
