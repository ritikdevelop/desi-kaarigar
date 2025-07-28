import React from "react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/page";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerBoxes from "../BannerBoxes/page";

const AdsBannerV2 = (props) => {
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
          <BannerBoxes info="left" image={"/small.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxes info="right" image={"/small1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxes info="left" image={"/small.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxes info="right" image={"/small1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxes info="left" image={"/small.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxes info="right" image={"/small1.jpg"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerV2;
