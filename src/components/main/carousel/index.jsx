import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '../../../styles/styledComponents/main/carousel'
import './carousel.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Img from '../../../assets/images/wallpaper.jpg';
import Img1 from '../../../assets/images/wallpaper1.jpg';
import Img2 from '../../../assets/images/wallpaper2.jpg';
import Img3 from '../../../assets/images/wallpaper3.jpg';
import Img4 from '../../../assets/images/wallpaper4.jpg';
import Img5 from '../../../assets/images/wallpaper5.jpg';
import Img6 from '../../../assets/images/wallpaper6.jpg';
import Img7 from '../../../assets/images/wallpaper7.jpg';
import Img8 from '../../../assets/images/wallpaper8.jpg';
import Img9 from '../../../assets/images/wallpaper9.jpg';

const CarouselSlider = () => {
    const slides = [ Img, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9 ]

    return(
        <>
            <Swiper
                loop
                spaceBetween={10}
                slidesPerView={4}   
            >
                {slides.map((slide) => (
                    <SwiperSlide>
                    <img src={slide} />
                </SwiperSlide> 
                ))}
            </Swiper>
        </>
    )
};

export default CarouselSlider;