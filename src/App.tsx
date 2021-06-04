import React from 'react';
import './styles/App.css';
import './styles/reset.css';
import NavMenu from './components/nav-menu';
import Home from './components/home';
import Skills from './components/skills';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';

const App = () => {
  return (
    <>
      <div>
        <NavMenu />
      </div>
      <div>
        <Home />
        <Skills />
        <Work />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default App;
