import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Nav } from '../styles';

// Footer Styled Component similar to Nav but with smaller height
const FooterContainer = styled(Nav)`
  position: fixed;
  bottom: 0;
  top: auto;
  align-items: center;
  justify-content: center;
  height: 50px; /* Smaller height for the footer */
  transition: transform 0.2s ease-in-out;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(100%)')};
`;

// Footer Component
const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <FooterContainer isVisible={isVisible}>
      <p>Senad Dizdarević</p>
    </FooterContainer>
  );
};

export { Footer };