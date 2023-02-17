import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
       <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:aleksenko2405@gmail.com">aleksenko2405@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+41797707856">+41 79 770 78 56</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="https://www.google.com/maps/place/Bern/@46.9546468,7.3598306,13z">Bern, Switzerland</LinkItem>
        </LinkColumn>
       </LinkList>
       <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovative solutions for a dynamic world</Slogan>
          <Slogan>© 2023</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/yaleksenko/'>
            <AiFillGithub size='3rem' /> 
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/yurii-aleksenko-660342234/'>
            <AiFillLinkedin size='3rem' /> 
          </SocialIcons>
        </SocialContainer>
       </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
