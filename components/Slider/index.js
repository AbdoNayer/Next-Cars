import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, EffectFade } from "swiper";

export default function Slider({ data }) {

    return (

        <Swiper
            effect          = {"fade"}
            className       = "mySwiper"
            navigation      = {true}
            slidesPerView   = {data.items}
            modules         = {data.name === 'slideHome' ? [EffectFade, Navigation] : ''}
        >
            {
                data.arr.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img src={item.img} alt="" />
                    </SwiperSlide>
                ))
            }
        </Swiper>

    )
}