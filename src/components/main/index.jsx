import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@mui/system';
import CarouselSlider from './carousel';
import MainBlock from './mainBlock';
import ScrollMenu from './scrollMenu';


const Main = () => {

    return (
        <>
            <MainBlock />
            <CarouselSlider />
            <ScrollMenu />
        </>
    )
};

export default Main;