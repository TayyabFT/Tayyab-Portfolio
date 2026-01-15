import React, { useState, useEffect, useRef } from 'react';

const StyleSwitcher = ({ darkMode, onDarkModeToggle, asideOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState('color-4');
  const styleSheetsRef = useRef([]);

  useEffect(() => {
    // Load all color stylesheets
    const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
    const links = [];

    colors.forEach((color) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `${process.env.PUBLIC_URL}/colors/${color}.css`;
      link.className = 'alternate-style';
      link.setAttribute('title', color);
      if (color !== activeColor) {
        link.setAttribute('disabled', 'true');
      }
      document.head.appendChild(link);
      links.push(link);
    });

    styleSheetsRef.current = links;

    return () => {
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  useEffect(() => {
    // Set active color style
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {
      if (activeColor === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });
  }, [activeColor]);

  useEffect(() => {
    // Hide switcher on scroll
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const setActiveStyle = (color) => {
    setActiveColor(color);
  };

  const toggleSwitcher = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    onDarkModeToggle(!darkMode);
  };

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div className="style-switcher-toggler s-icon" onClick={toggleSwitcher}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="day-night s-icon" onClick={toggleDarkMode}>
        <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </div>
      <h4>Theme Color</h4>
      <div className="color">
        <span className="color-1" onClick={() => setActiveStyle('color-1')}></span>
        <span className="color-2" onClick={() => setActiveStyle('color-2')}></span>
        <span className="color-3" onClick={() => setActiveStyle('color-3')}></span>
        <span className="color-4" onClick={() => setActiveStyle('color-4')}></span>
        <span className="color-5" onClick={() => setActiveStyle('color-5')}></span>
      </div>
    </div>
  );
};

export default StyleSwitcher;

