import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home.js';
import { Socials } from './Socials.js';
import { About } from './About.js';
import { Contacts } from './Contacts.js';


function App() {
  return (
    <>
      <banner>
        <h1>Benjamin Stonestreet</h1>
      </banner>
      <page>
        <nav class='column'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/socials">Socials</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
        <router class ='column'> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="socials" element={<Socials />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </router>
      </page>
    </>
  );
}

export default App;
