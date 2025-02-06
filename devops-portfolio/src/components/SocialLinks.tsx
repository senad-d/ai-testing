import React, { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import styled from 'styled-components';

const SocialContainer = styled.div<{ isScrolled: boolean }>`
  display: flex;
  position: fixed;
  bottom: ${(props) => (props.isScrolled ? '50px' : '30px')}; /* Adjust bottom position */
  left: ${(props) => (props.isScrolled ? 'auto' : '50%')};
  right: ${(props) => (props.isScrolled ? '20px' : 'auto')};
  transform: ${(props) => (props.isScrolled ? 'none' : 'translateX(-50%)')};
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  ${({ isScrolled }) => isScrolled && 'flex-direction: column;'}

  @media (max-width: 768px) {
    bottom: ${(props) => (props.isScrolled ? '50px' : '20px')}; /* Adjust bottom position */
    left: ${(props) => (props.isScrolled ? 'auto' : '50%')};
    right: ${(props) => (props.isScrolled ? '20px' : 'auto')};
  }
`;

const SocialIcon = styled.a<{ isScrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px; /* Smaller size */
  height: 30px; /* Smaller size */
  margin: ${(props) => (props.isScrolled ? '0.5rem 0' : '0 0.5rem')};
  border-radius: 50%;
  background-color: ${(props) => (props.isScrolled ? 'black' : 'white')};
  color: ${(props) => (props.isScrolled ? 'white' : 'black')};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isScrolled ? 'white' : 'black')};
    color: ${(props) => (props.isScrolled ? 'black' : 'white')};
  }
`;

const SocialLinks: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SocialContainer isScrolled={isScrolled}>
      <SocialIcon
        href="https://linkedin.com"
        isScrolled={isScrolled}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </SocialIcon>
      <SocialIcon
        href="https://github.com"
        isScrolled={isScrolled}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </SocialIcon>
    </SocialContainer>
  );
};

export { SocialLinks };