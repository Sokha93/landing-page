import React from 'react';
import Logo from './logo';
import { MainBlock, MenuAndSelect } from '../../styles/styledComponents/header';
import { Container } from '@mui/material';
import Nav from './navbar/index';
import HeaderMenu from './headerMenu';
import SwitchLang from './switchLang';

const Header = () => {

  const style = { 
    menuAndSelect : {
      width: '150px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'   
    }
  }
  return (
    <Container>
      <MainBlock>
        <Logo />
        <Nav />
        <MenuAndSelect>
          <SwitchLang />
          <HeaderMenu />
        </MenuAndSelect>
      </MainBlock>
    </Container>
  )
};

export default Header