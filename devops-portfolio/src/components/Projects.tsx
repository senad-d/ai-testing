// src/components/Projects.tsx
import React from 'react';
import {
  ExperienceSection, ExperienceCompany, ExperienceItem, RoleTitle, RoleInfoContainer, RoleDetails, RoleSkills, RoleDates, Divider 
} from '../styles';

const Projects: React.FC = () => (
  <ExperienceSection id="experience">
    <h2>Experience</h2>
    <ExperienceItem>
      <ExperienceCompany>Valcon</ExperienceCompany>
      
      <RoleInfoContainer>
        <RoleTitle> DevOps Engineer – Senior Specialist</RoleTitle>
        <RoleDetails>
          <RoleDates>Jul 2024 - Present · 8 mos</RoleDates>
          <RoleSkills>Amazon Web Services (AWS), Terraform and +10 skills</RoleSkills>
        </RoleDetails>
      </RoleInfoContainer>
      
      <Divider />

      <RoleInfoContainer>
        <RoleTitle> DevOps Technology Specialist</RoleTitle>
        <RoleDetails>
          <RoleDates>Jan 2023 - Jul 2024 · 1 yr 7 mos</RoleDates>
          <RoleSkills>Infrastructure, Linux and +26 skills</RoleSkills>
        </RoleDetails>
      </RoleInfoContainer>

      <Divider />

      <RoleInfoContainer>
        <RoleTitle> DevOps Engineer</RoleTitle>
        <RoleDetails>
          <RoleDates>Sep 2022 - Jan 2023 · 5 mos</RoleDates>
          <RoleSkills>Infrastructure, Git and +23 skills</RoleSkills>
        </RoleDetails>
      </RoleInfoContainer>

      <Divider />

      <ExperienceCompany>INA Grupa</ExperienceCompany>
      
      <RoleInfoContainer>
        <RoleTitle> Technical Support Manager</RoleTitle>
        <RoleDetails>
          <RoleDates>Jan 2011 - Nov 2022 · 11 yrs 11 mos</RoleDates>
          <RoleSkills>Troubleshooting, Teamwork and +5 skills</RoleSkills>
        </RoleDetails>
      </RoleInfoContainer>

      <Divider />
      
    </ExperienceItem>
  </ExperienceSection>
);

export { Projects };