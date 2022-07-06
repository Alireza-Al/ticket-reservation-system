import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


function Slider() {

    const [swiperSlides, setSwiperSlides] = useState(3);
    

    useEffect(() => {
        // this function will change the number of slides to be shown after a certain number of innerWidth
        window.addEventListener("resize",() => {
            if (window.innerWidth < '900') {
                setSwiperSlides(2)
            }
            if (window.innerWidth < '650') {
                setSwiperSlides(1)
            }
            else {
                setSwiperSlides(3)
            }
        })
    },[])

    useEffect(() => {
        console.log(swiperSlides);
    },[swiperSlides])

    return (
        <div className='slider'>
            <img className='imgLarge' src="https://cdnsnapptrip.com/images/market/Uploads/banners/website/hotel/large/20220625/1-mobile-20220625.jpg" alt="" />
            <Swiper
                slidesPerView={swiperSlides}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://cdnsnapptrip.com/images/market/Uploads/banners/website/hotel/medium/20220625/1-desktop-20220625.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdnsnapptrip.com/images/market/Uploads/banners/website/hotel/medium/20220625/2-desktop-20220625.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdnsnapptrip.com/images/market/Uploads/banners/website/hotel/medium/20220625/4-desktop-20220625.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdnsnapptrip.com/images/market/Uploads/banners/website/hotel/medium/20220625/3-desktop-20220625.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdnsnapptrip.com/images/market/Uploads/banners/website/flight/medium/20220625/4-desktop-20220625.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdnsnapptrip.com/images/market/Uploads/banners/website/flight/medium/20220625/3-desktop-20220625.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdnsnapptrip.com/images/market/Uploads/banners/website/flight/medium/20220625/1-desktop-20220625.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider