import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1 >
      <Link style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '10px' }} href='/'>
          <DiCode size='4rem' /><Span>DeepLogic</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href='#projects'>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink href='#tech'>
          Technologies
        </NavLink>
      </li>
      <li>
        <NavLink href='#about'>
          About
        </NavLink>
      </li>
    </Div2>
    <Div3>
        <SocialIcons href='https://github.com/yaleksenko/'>
          <AiFillGithub size='3rem' /> 
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/yurii-aleksenko-660342234/'>
          <AiFillLinkedin size='3rem' /> 
        </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

