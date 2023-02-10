import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@mui/system';
import CarouselSlider from './carousel';
import MainBlock from './mainBlock';


const Main = () => {

    return (
        <Container>
            <MainBlock />
            <CarouselSlider />
        </Container>
    )
};

export default Main;