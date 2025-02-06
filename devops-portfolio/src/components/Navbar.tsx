// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Nav, Title, Hamburger, NavLinks } from '../styles';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const getOffset = () => -(window.innerHeight / 2 - 350);

  return (
    <Nav isOpen={isOpen} isScrolled={isScrolled}>
      <div className="title-container">
        <Title>DevOps Portfolio</Title>
      </div>
      <Hamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <NavLinks isOpen={isOpen} isScrolled={isScrolled}>
        <Link to="hero" smooth duration={500} offset={getOffset()} onClick={closeMenu}>
          Home
        </Link>
        <Link to="about" smooth duration={500} offset={getOffset()} onClick={closeMenu}>
          About
        </Link>
        <Link to="projects" smooth duration={500} offset={getOffset()} onClick={closeMenu}>
          Projects
        </Link>
        <Link to="skills" smooth duration={500} offset={getOffset()} onClick={closeMenu}>
          Skills
        </Link>
        <Link to="contact" smooth duration={500} offset={getOffset()} onClick={closeMenu}>
          Contact
        </Link>
      </NavLinks>
    </Nav>
  );
};

export { Navbar };