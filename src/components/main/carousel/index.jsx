import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper';
import useLanguage from '../../../context/multipleLanguages/hook';
import './carousel.scss'
import 'swiper/css';
import 'swiper/css/autoplay'
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

const slides = [ Img, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9 ]


const CarouselSlider = () => {

    const { t } = useLanguage();

    return(
        <>
            
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '800px',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: 12
                }}>
                    <Swiper
                        // thumbs={{swiper: active}}
                        speed={2000}
                        loop={true}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation, Thumbs]}
                        grabCursor={true}
                        className={'swiper-slider'}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <img className='images-slide' src={slide} />
                            </SwiperSlide> 
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
};

export default CarouselSlider;