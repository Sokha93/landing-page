import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper';
// import useLanguage from '../../../context/multipleLanguages/hook';
import './carousel.scss'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Img1 from '../../../assets/images/1.jpg';
import Img2 from '../../../assets/images/3.png';
import Img3 from '../../../assets/images/4.jpg';
import Img4 from '../../../assets/images/5.jpg';
import Img5 from '../../../assets/images/6.jpg';
import Img6 from '../../../assets/images/7.jpg';
import Img7 from '../../../assets/images/8.jpg';
import Img8 from '../../../assets/images/9.jpg';
import Img9 from '../../../assets/images/10.jpg';
import Img10 from '../../../assets/images/11.jpg';
import Img11 from '../../../assets/images/12.jpg';
import Img12 from '../../../assets/images/13.jpg';
import Img13 from '../../../assets/images/2.png';


const slides = [ Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13 ]


const CarouselSlider = () => {

    // const { t } = useLanguage();

    return(
        <>
            
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '72%',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: 12
                }}>
                    <Swiper
                        // thumbs={{swiper: active}}
                        speed={2000}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={2}
                        // breakpoints={{
                        //     699:{
                        //         slidesPerView: 1
                        //     }
                        // }}
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