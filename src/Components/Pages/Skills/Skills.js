import React, { useEffect, useRef, useState } from 'react'
import "./Skills.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Skills() {

  
  const skillsData = [
    {
      id: 1,
      image: "/images/javascript.png",
      title: "Javascript",
      description: "I use this programming language for making websites frontend and backend functionalities ."
    },
    {
      id: 2,
      image: "/images/react.png",
      title: "React JS || React Native",
      description: "I use this tools for making webapps."
    },
    {
      id: 3,
      image: "/images/html.png",
      title: "HTML",
      description: "I use this language for creating Websites."
    },
    {
      id: 4,
      image: "/images/css.png",
      title: "CSS",
      description: "I use this language for styling and designing Websites."
    },
    {
      id: 5,
      image: "/images/mongos.png",
      title: "MongoDB",
      description: "I am very experienced in MongoDB as database."
    }
]

  return (
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
      className="swiperr"
    >
    <div className='skills' id='skills'>
           
           
      <SwiperSlide className='swiperx'>
        <img src="/images/mongos.png" alt='' />
        <h1>elcome</h1>
        <h1>elcome</h1>
        <h1>elcome</h1>
        <h1>elcome</h1>
        
      </SwiperSlide>
      <SwiperSlide className='swiperx'>Slide 1</SwiperSlide>
      <SwiperSlide className='swiperx'>Slide 2</SwiperSlide>
      <SwiperSlide className='swiperx'>Slide 3</SwiperSlide>
      <SwiperSlide className='swiperx'>Slide 4</SwiperSlide>
      </div>
      
    </Swiper>

  )
}

export default Skills
