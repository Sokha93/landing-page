import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@mui/system';
import CarouselSlider from './carousel';
import AddPosts from './mainBlock';
import ScrollMenu from './scrollMenu';


const Main = () => {

    return (
        <Container>
            <CarouselSlider />
            <AddPosts />
            <ScrollMenu />
        </Container>
    )
};

export default Main;