import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello,<br />
        It's My Portfolio
      </SectionTitle>
      <SectionText>
        My name is Yuri Aleksenko. I am a Full Stack Web Developer with a passion for building websites and applications. Let's make awesome projects together.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Hire Me</Button>  
      

    </LeftSection>


  </Section>
);

export default Hero;