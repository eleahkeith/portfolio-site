import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import './styles/tablet.css';
import './styles/desktop.css';
import './styles/variables.css';
import './styles/animations.css';
import Header from './components/header';
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
        <Header />
      </div>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <IconSet />
    </>
  );
};

export default App;
