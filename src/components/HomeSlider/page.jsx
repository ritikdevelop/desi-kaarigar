import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
const HomeSlider = () => {
  return (
    <div className="homeSlider py-3">
      <div className="container">
        <Swiper
        loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item overflow-hidden rounded-[15px]">
              <img
                src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item overflow-hidden rounded-[15px]">
              <img
                src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item overflow-hidden rounded-[15px]">
              <img
                src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item overflow-hidden rounded-[15px]">
              <img
                src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item overflow-hidden rounded-[15px]">
              <img
                src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
