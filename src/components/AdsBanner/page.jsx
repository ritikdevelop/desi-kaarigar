import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/page";
import { Swiper, SwiperSlide } from "swiper/react";

const AdsBanner = (props) => {
  return (
    <div className="adsBanners py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={true}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox img={"/adsBanner.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/adsBanner.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/adsBanner.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/adsBanner.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/adsBanner.webp"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/adsBanner.webp"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBanner;
