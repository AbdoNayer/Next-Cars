import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import "swiper/components/navigation";
import "swiper/components/effect-fade";

import { Navigation, EffectFade } from "swiper";
import Image from 'next/image';

export default function Slider({ data }) {

    return (

        <Swiper
            effect          = {"fade"}
            className       = "mySwiper"
            navigation      = {true}
            slidesPerView   = {1}
            modules         = {[EffectFade, Navigation]}
        >
            {
                data.images.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Image style={{ width: '100%' }} width={700} height={600} src={item} alt="slider" />
                    </SwiperSlide>
                ))
            }
        </Swiper>

    )
}