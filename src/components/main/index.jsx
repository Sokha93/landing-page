import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@mui/system';
import CarouselSlider from './carousel';
import MainBlock from './mainBlock';


const Main = () => {

    return (
        <Container>
            <CarouselSlider />
            <MainBlock />
        </Container>
    )
};

export default Main;