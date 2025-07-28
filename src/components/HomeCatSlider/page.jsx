import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-8 pt-4">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
              <img
                src="https://backoffice.cadburygifting.in/media/catalog/product/4/-/4-silk-cdm-bar-happy-birthday_your-message.png?optimize=high&fit=bounds&height=250&width=250&canvas=250:250&format=auto"
                alt="small banner"
                className="w-[60px] transition-all"
              />
              <h3 className="text-[14px] font-medium mt-3">Chocolates</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
