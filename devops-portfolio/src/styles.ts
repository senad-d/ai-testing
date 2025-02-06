// src/styles.ts
import styled, { createGlobalStyle } from 'styled-components'; // Correct single import
import { Link as ScrollLink } from 'react-scroll';
import backgroundImage from './assets/background.jpg'; // Move this import at the top

// General Styles
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box; /* Ensure consistent box-sizing across elements */
  }
`;

export const Container = styled.div`
  text-align: center;
`;

// Navbar Styles
interface NavProps {
  isOpen?: boolean;
  isScrolled?: boolean;
  isVisible?: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.2rem;
    flex-direction: column;
    align-items: flex-start;

    .title-container {
      display: flex;
      justify-content: flex-end;
      width: 90%;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
      opacity: ${({ isScrolled }) => (isScrolled ? '0' : '1')};
      transform: ${({ isScrolled }) => (isScrolled ? 'translateY(-20px)' : 'translateY(0)')};
    }
  }
`;

export const Title = styled.h1`
  margin: 0;

  @media (max-width: 768px) {
    text-align: right;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 1rem;

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavLinks = styled.div<NavProps>`
  display: flex;
  align-items: center;
  padding-right: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-out;
  }

  a {
    color: white;
    margin: 0 1rem;
    padding: 0.5rem 0;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      margin: 0.5rem 1rem;
    }
  }
`;

// Hero Section Styles
export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;  /* Ensure the hero section takes full viewport width */
  max-width: 100%;  /* Prevent overflow in mobile view */
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  margin: 0;  /* Remove default margin on sections */

  @media (max-width: 768px) {
    padding: 0 1rem;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    padding-top: 3rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  color: white;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroButton = styled(ScrollLink)`
  padding: 1rem 2rem;
  border: none;
  background: #ff4757;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background: #e84148;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

// Contact Section Styles
export const ContactSection = styled.section`
  padding: 4rem 3rem;
  text-align: center;
  position: relative; /* Ensure it doesn't get overlapped by the footer */

  @media (max-width: 768px) {
    padding: 4rem 3rem;
  }

  /* Add padding to the bottom to prevent the footer from overlapping the content */
  padding-bottom: 70px; 
`;



// Skills Section Styles
export const SkillsSection = styled.section`
  padding: 4rem 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const SliderSection = styled.section`
  padding: 2rem 4rem;
  text-align: center;

  .slick-list {
    overflow: hidden;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    flex: 1 0 auto;
  }

  .slider-image-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .slider-image {
    width: 100%;
    height: auto;
    max-height: 400px; // You can adjust this max height as needed
    object-fit: cover;
    display: block; // Ensure the image is rendered as a block element
  }
`;

// Table Styles
export const TableContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the table horizontally */
  padding: 20px; /* Add padding from the sides */
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    color: black;
  }

  @media (min-width: 769px) {
    width: 60%; /* Smaller table width on desktop */
    padding: 2rem 2rem;
  }
`;

// Add MainContentWrapper to add side padding
export const MainContentWrapper = styled.div`
  padding-right: 60px; /* Padding to avoid overlap with social icons */

  @media (max-width: 768px) {
    padding-right: 0; /* No padding needed for mobile */
  }
`;

// Email Form Styles
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: none;
  background-color: #ff4757;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #e84148;
  }
`;

// About Section Styles
export const AboutSection = styled.section`
  padding: 4rem 4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const ExperienceSection = styled.section`
  padding: 1rem 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const ExperienceCompany = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const RoleInfoContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const RoleTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.5rem;
  margin: 1rem 0 0.2rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

export const RoleDetails = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

export const RoleDates = styled.p`
  color: #6b6b6b;
  font-size: 0.9rem;
  margin: 0;
`;

export const RoleSkills = styled.p`
  color: #6b6b6b;
  font-size: 0.9rem;
  margin: 0.5rem 0 0;
`;

export const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 1rem 0;
  width: 50%;
  align-self: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

