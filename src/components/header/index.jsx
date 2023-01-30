import React from 'react';
import Logo from './logo';
import { MainBlock, MenuAndSelect } from '../../styles/styledComponents/header';
import { Container } from '@mui/material';
import Nav from './navbar/index';
import HeaderMenu from './headerMenu';
import SwitchLang from './switchLang';

const Header = () => {

  return (
    <Container>
      <MainBlock>
        <Logo />
        <Nav />
        <HeaderMenu />

        {/* <MenuAndSelect>
          <SwitchLang />
        </MenuAndSelect> */}
      </MainBlock>
    </Container>
  )
};

export default Header