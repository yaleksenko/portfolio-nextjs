import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Projects'},
  { number: 20, text: 'Students', },
  { number: 17, text: 'Technologies', },
  { number: 1, text: 'Certificates', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map(( card, index ) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
