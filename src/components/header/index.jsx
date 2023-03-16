import React, { useEffect } from 'react';
import Logo from './logo';
import { MainBlock, MenuAndSelect } from '../../styles/styledComponents/header';
import { Container } from '@mui/material';
import Nav from './navbar/index';
import HeaderMenu from './headerMenu';
import SwitchLang from './switchLang';
import '../../App.scss';

const Header = () => {

  return (
    <Container>
        <MainBlock>
          <Logo />
          <Nav />
          <MenuAndSelect>
            <HeaderMenu />
            <SwitchLang />
          </MenuAndSelect>
        </MainBlock>
    </Container>
  )
};

export default Header