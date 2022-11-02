import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { Link } from "react-router-dom";

import React from "react";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";

import style from "./anuncio.module.css";

import anuncio from "./gym/anuncio.png";
import anuncio1 from "./gym/anuncio1.png";
import anuncio2 from "./gym/anuncio2.png";
import anuncio3 from "./gym/anuncio3.png";
import anuncio4 from "./gym/anuncio4.jpg";

const Anuncio = () => {
  return (

      <div className="w-fit">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        className="w-swiper"
      >
        <SwiperSlide>
          <Link to="/">
            <img src={anuncio} className="w-full h-52 object-cover " />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={anuncio1} className="w-full h-52 object-cover " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={anuncio2} className="w-full h-52  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={anuncio3} className="w-full h-52 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={anuncio4} className="w-full h-52  object-cover" />
        </SwiperSlide>
      </Swiper>
      </div>
 
  );
};

export default Anuncio;
