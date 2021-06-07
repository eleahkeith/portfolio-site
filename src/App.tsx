import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import './styles/tablet.css';
import './styles/desktop.css';
import NavMenu from './components/nav-menu';
import Home from './components/home';
import Skills from './components/skills';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';
import { IconSet } from './components/icons';

const App = () => {
  return (
    <>
      <div className="nav">
        <NavMenu />
      </div>
      <div className="app-content">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <IconSet />
      </div>
    </>
  );
};

export default App;
