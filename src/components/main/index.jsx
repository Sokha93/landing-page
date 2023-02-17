import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@mui/system';
import CarouselSlider from './carousel';
import AddPosts from './mainBlock';


const Main = () => {

    return (
        <Container>
            <AddPosts />
            <CarouselSlider />
            
        </Container>
    )
};

export default Main;