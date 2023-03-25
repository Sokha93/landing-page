import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper';
// import useLanguage from '../../../context/multipleLanguages/hook';
import './carousel.scss'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Img1 from '../../../assets/images/wallpaperbetter1.jpg';
import Img2 from '../../../assets/images/wallpaperbetter2.jpg';
import Img3 from '../../../assets/images/wallpaperbetter3.jpg';
import Img4 from '../../../assets/images/wallpaperbetter4.jpg';
import Img5 from '../../../assets/images/wallpaperbetter5.jpg';
import Img6 from '../../../assets/images/wallpaperbetter6.jpg';


const slides = [ Img1, Img2, Img3, Img4, Img5, Img6]


const CarouselSlider = () => {

    // const { t } = useLanguage();

    return(
        <>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <div style={{width: '320px'}}>
                проект находится на стадии разработки... 
                в процессе кастомный селект для выбора языков,
                добавить дизайн для страницы ЛОГИН, исправить футер, 
                пополнить тело боди и добавить новые страницы! 
            </div>
        </div>
            
            <div style={{
                marginTop: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '50%',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: 12
                }}>
                    <Swiper
                        // thumbs={{swiper: active}}
                        speed={2000}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2000,
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