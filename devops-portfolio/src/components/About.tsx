// src/components/About.tsx
import React from 'react';
import { AboutSection } from '../styles';

const About: React.FC = () => (
  <AboutSection id="about">
    <h2>About Me</h2>
    <p> I am a dedicated and passionate DevOps Engineer with a profound interest in the world of computers. 
        Despite pursuing an education and career in chemistry and later in the oil industry, I never ceased 
        to explore the fascinating realm of information technology, which has always been my true passion. 
        Alongside my professional endeavors, I also invested my time and energy into karate, achieving the 
        role of a coach for young athletes. Throughout this journey, I consistently made room for 
        self-education in the field of computer science. With the invaluable assistance of my friend and 
        current colleague, Mario, I successfully navigated through the demands of work and family 
        responsibilities, gradually mastering the fundamental principles of DevOps. I further enriched my 
        knowledge by attending online academies, obtaining certification as an AWS Solution Architect.</p>
  </AboutSection>
);

export { About };