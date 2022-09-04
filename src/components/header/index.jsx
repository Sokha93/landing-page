import React from 'react';
import Logo from './logo';
import { MainBlock } from '../../styles/styledComponents/header';
import { Container } from '@mui/material';
import Nav from './navbar/index';
import HeaderMenu from './headerMenu';

const Header = () => {
  return (
    <Container>
      <MainBlock>
        <Logo />
        <Nav />
        <HeaderMenu />
      </MainBlock>
    </Container>
  )
};

export default Header