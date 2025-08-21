import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSmall = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
    zoomSliderSmall.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          {/* //NOTe: Small Images slider */}
          <Swiper
            ref={zoomSliderSmall}
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={0}
            modules={[Navigation]}
            navigation={true}
            className="zoomProductSliderThumbs h-[61vh] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 0 ? "" : "opacity-30"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src={
                    "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                  }
                  alt="Product Image"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 1 ? "" : "opacity-30"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src={
                    "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                  }
                  alt="Product Image"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 2 ? "" : "opacity-30"
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src={
                    "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                  }
                  alt="Product Image"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 3 ? "" : "opacity-30"
                }`}
                onClick={() => goto(3)}
              >
                <img
                  src={
                    "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                  }
                  alt="Product Image"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 4 ? "" : "opacity-30"
                }`}
                onClick={() => goto(4)}
              >
                <img
                  src={
                    "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                  }
                  alt="Product Image"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 5 ? "" : "opacity-30"
                }`}
                onClick={() => goto(5)}
              >
                <img
                  src={
                    "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                  }
                  alt="Product Image"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[80%] h-[480px] overflow-hidden">
          {/* //NOTe: Big Images slider */}
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://www.fnp.com//images/pr/l/v20250325180807/fnp-dubai-kunafa-dark-chocolate-gift-set_1.jpg"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
