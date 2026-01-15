import React, { useState, useEffect } from 'react';
import Aside from './components/Aside';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import StyleSwitcher from './components/StyleSwitcher';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [asideOpen, setAsideOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Set initial dark mode
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle scroll to detect active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 0;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
    if (window.innerWidth < 1200) {
      setAsideOpen(false);
    }
  };

  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <div className="main-container ">
      <Aside 
        activeSection={activeSection} 
        onNavClick={handleNavClick}
        asideOpen={asideOpen}
        onToggle={toggleAside}
      />
      <div className="main-content">
        <Home />
        <About onHireMeClick={() => handleNavClick('contact')} />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <StyleSwitcher 
        darkMode={darkMode}
        onDarkModeToggle={setDarkMode}
        asideOpen={asideOpen}
      />
    </div>
  );
}

export default App;

