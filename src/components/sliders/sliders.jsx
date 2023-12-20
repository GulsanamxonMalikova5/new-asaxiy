import React from 'react'
// import React, { useRef, useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Mirshakar from './img/mirshakar.jpeg'
import Idishlar from './img/idishlar.jpg'
import Kod from './img/kod-buzar.webp'
import Aksiya from './img/aksiya.jpg'
import Bosch from './img/bosch.webp'
import Kosmetika from './img/kosmetika.jpg'
import Xonor from './img/xonor.webp'
import Premyera from './img/premyera.jpg'
import Kun from './img/kun-chegirmasi.jpg'
import Bolalar from './img/bolalar.jpg'

import './sliders.scss'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import 'swiper/swiper-bundle.min.css';

const Sliders = () => {
  let data = [
    { img: Mirshakar },
    { img: Idishlar },
    { img: Aksiya },
    { img: Kod },
    { img: Bosch },
    { img: Kosmetika },
    { img: Xonor },
    { img: Premyera },
    { img: Bolalar },
  ]


  return (
    <>
      <div className="slider">
        <div className="slider__imgs">
          <div className="slider__slid">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide key={index}><img src={item.img} alt="picture" width={850} height={400} /></SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
        <div className="slider__chegirma">
          <img src={Kun} alt="picture" />
        </div>
      </div>
    </>
  )
}
export default Sliders