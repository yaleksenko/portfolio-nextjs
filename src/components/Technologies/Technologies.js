import React from 'react';
import { DiFirebase, DiPython, DiReact, DiDocker } from 'react-icons/di';
import { FcCheckmark } from 'react-icons/fc';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Tecnologies</SectionTitle>
    <SectionText>
      I have worked with many technologies, including:
      <br/>
      Python, Django, React, Docker, Next.js, Node.js, Express.js, MongoDB...
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            React, Next.js, Express.js, MongoDB...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Python, Django, DRF, FastApi, Postgres...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="5rem" />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Docker, Git, Kubernetes...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
