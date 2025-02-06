// src/App.tsx
import React from 'react';
import { GlobalStyle, Container } from './styles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects'; // Import the Projects component
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ImageSlider } from './components/ImageSlider';
import { AnimatedTable } from './components/AnimatedTable';
import { Footer } from './components/Footer';
import { SocialLinks } from './components/SocialLinks';
import { About } from './components/About'; // Import the About component

const App: React.FC = () => (
  <Container>
    <GlobalStyle />
    <Navbar />
    <Hero />
    <About /> {/* Add the About component */}
    <Projects /> {/* Add the Projects component */}
    <ImageSlider />
    <Skills />
    <AnimatedTable />
    <Contact />
    <Footer />
    <SocialLinks />
  </Container>
);

export default App;