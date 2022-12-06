import React from 'react'
import "./Testing.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Testing() {
    const names =[ 
        {
            name:"ken",
            age:3,
            image: "/images/krisiz.jpg"
        },
        {
            name:"keniko",
            age:13,
            image: "/images/krisiz.jpg"

        },
        {
            name:"wandia",
            age:23,
            image: "/images/krisiz.jpg"

        }
    ]
  return (
   

    <div className='namesss'>
<div className='caraus'>

            {/* {names.map((item) =>( */}
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

                <SwiperSlide className='namezz'>
                    <img src="/images/cartoon.jpg" />
                </SwiperSlide>
                
                <SwiperSlide className='namezz'>
                    <img src="/images/krisi.jpg" />
                </SwiperSlide>
                <SwiperSlide className='namezz'>
                    <img src="/images/krisiz.jpg" />
                </SwiperSlide>
                </Swiper>

            {/* )) } */}

    </div>


    </div>
  )
}

export default Testing
