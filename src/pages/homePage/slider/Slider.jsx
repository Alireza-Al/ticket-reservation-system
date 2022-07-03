import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


function Slider() {
    return (
        <div className='slider'>
            <Swiper
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
                    <img src="https://cdnsnapptrip.com/images/market/Uploads/banners/website/hotel/large/20220625/1-mobile-20220625.jpg" alt="" />
                    </SwiperSlide>
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