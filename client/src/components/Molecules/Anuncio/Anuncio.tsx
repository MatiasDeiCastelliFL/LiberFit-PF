import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Pagination, Navigation } from "swiper";

import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./anuncio.module.css"

import anuncio from "./gym/anuncio.png"
import anuncio1 from "./gym/anuncio1.png"
import anuncio2 from "./gym/anuncio2.png"
import anuncio3 from "./gym/anuncio3.png"
import anuncio4 from "./gym/anuncio4.jpg"


const Anuncio = () => {

    return (
            <>
              <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                          delay: 5000,
                          disableOnInteraction: false
                    }}
                    pagination={{
                    clickable: true
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
            <SwiperSlide><img src={anuncio} /></SwiperSlide>
            <SwiperSlide><img src={anuncio1} /></SwiperSlide>
            <SwiperSlide><img src={anuncio2} /></SwiperSlide>
            <SwiperSlide><img src={anuncio3} /></SwiperSlide>
            <SwiperSlide><img src={anuncio4} /></SwiperSlide>
      </Swiper>
    </>
    )
}

export default Anuncio

