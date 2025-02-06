import React from 'react';
import { ContactSection } from '../styles';
import { EmailForm } from './EmailForm';

const Contact: React.FC = () => (
  <ContactSection id="contact">
    <h2>Contact</h2>
    <p>Details about how to contact me will be displayed here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <EmailForm />
  </ContactSection>
);

export { Contact };