// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";
// import required modules
import {Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
    
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative"><img src="https://cdn.wallpapersafari.com/52/17/8yz19u.jpg" alt="lebanon"/>
        <div className="content"> <div>
        <h1>get a special offer now!</h1>
        <h2>contact us now and browse more information about the resorts and the most prominent offers.</h2>
        <span>more info</span>
        </div></div>
        </SwiperSlide>
        <SwiperSlide className="relative"><img src="https://img1.wsimg.com/isteam/ip/08a6d27f-82cf-4f30-be95-564dfc472bd0/5D6A0045.JPG/:/rs=w:1280" alt="lebanon"/>
        <div className="content"> <div>
        <h1>get a special offer now!</h1>
        <h2>contact us now and browse more information about the resorts and the most prominent offers.</h2>
        <span>more info</span></div>
        </div></SwiperSlide>
        <SwiperSlide className="relative"><img src="https://wallpapercrafter.com/th8002/793650-sheraton-maldives-resort-luxury-bungalows-water.jpg" alt="lebanon"/>
        <div className="content"> 
        <div>
        <h1>get a special offer now!</h1>
        <h2>contact us now and browse more information about the resorts and the most prominent offers.</h2>
        <span>more info</span></div>
        </div></SwiperSlide>

      </Swiper>
    </>
  );
}
