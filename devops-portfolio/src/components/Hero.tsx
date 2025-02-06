import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { HeroSection, HeroTitle, HeroText, HeroButton } from '../styles';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5 }
      );
    }
  }, []);

  const getOffset = () => -window.innerHeight / 3 + 200;

  return (
    <HeroSection id="hero">
      <HeroTitle ref={titleRef}>DevOps Engineer</HeroTitle>
      <HeroText>Welcome to my portfolio website. Here you can find my projects, skills, and contact information.</HeroText>
      <HeroButton to="projects" smooth duration={500} offset={getOffset()}>
        Check My Work
      </HeroButton>
    </HeroSection>
  );
};

export { Hero };