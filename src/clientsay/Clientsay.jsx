import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import profile from '../images/profile.png'
// Import Swiper styles
import 'swiper/swiper.scss'

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
    <div>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
        <div className="space-y-8 p-[2rem] sm:p-[5rem] md:p-[2rem] md:w-[24rem]  lg:mx-[0rem]  lg:w-[40rem]  ">
                <div className="lg:space-y-9">Lorem ipsum dmtetur, a
                  dipisicing elit.a Provide <br />
                  t recusandae expedita adasdsla 
                  commodi qui verita <br /> tis ipsa
                   labore at   
                   illa quos architecto autem 
                   cons <br /> ectetur,lask sapiente dos 
                   error.</div>
                <div className="flex space-x-6  "> 
                  <div><img className="rounded-full w-[5rem] h-[5rem]" src={profile} alt="" /></div>
                  <div className="space-y-3">
                    <b>Harry Gabriel</b>
                    <p><b>BSCS</b></p>
                      </div>
                </div>
              </div></SwiperSlide>
        
      </Swiper>
      </div>

    </>
  );
}
