import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeBanner = () => {
  return (
    <Swiper
    loop={true}
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="homeBanner"
    >
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden relative">
          <img src="/first.jpg" />

          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[35px] font-[600] w-full relative -right-[100%] opacity-0">
              Women Solid Round Yellow T-Shirt
            </h2>

            <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
              Starting At Only{" "}
              <span className="text-red-400 text-[30px] font-[500]">₹299</span>
            </h3>

            <div className="w-full relative -bottom-[100%] opacity-0 btn_">
              <Button className="btn-org">SHOP NOW</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item w-full rounded-md overflow-hidden">
          <img src="/second.jpg" />

          <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-500">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
              Big Saving Days Sale
            </h4>
            <h2 className="text-[35px] font-[600] w-full relative -right-[100%] opacity-0">
              Women Solid Round Yellow T-Shirt
            </h2>

            <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
              Starting At Only{" "}
              <span className="text-red-400 text-[30px] font-[500]">₹299</span>
            </h3>

            <div className="w-full relative -bottom-[100%] opacity-0 btn_">
              <Button className="btn-org">SHOP NOW</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBanner;
