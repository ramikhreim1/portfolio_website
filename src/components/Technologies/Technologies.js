import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web DevOps world.
      From Back-end To Design To CI/CD Pipelines, IaC ,AWS.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>System and Network Administrator</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Cisco Certified, VPN, Security, Linux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AWS Certified Solutions Architect</ListTitle>
          <ListParagraph>
            Experiece with <br />
            AWS Services
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AWS DevOps Engineer Professional</ListTitle>
          <ListParagraph>
            Experience with <br />
            CloudFormations, CI/CD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Microsoft System Engineer</ListTitle>
          <ListParagraph>
            Experience with <br />
            Windows Administrator, PowerShell
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;