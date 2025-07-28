import React, { useState } from "react";
import HomeSlider from "../../components/HomeSlider/page";
import HomeCatSlider from "../../components/HomeCatSlider/page";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBanner from "../../components/AdsBanner/page";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "../../components/ProductSlider/page";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem/page";
import InstagramSlider from "../../components/Instagram/page";
import HomeBanner from "../../components/HomeBanner/page";
import BannerBoxes from "../../components/BannerBoxes/page";
import AdsBannerV2 from "../../components/AdsBannerV2/page";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[70%]">
            <HomeBanner />
          </div>

          <div className="part2 w-[30%] flex items-center justify-around gap-2 flex-col">
            <BannerBoxes info="left" image={"/small.jpg"} />
            <BannerBoxes info="right" image={"/small1.jpg"} />
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[18px] font-[400]">
                Do not miss the current offers.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="All" />
                <Tab label="Chocolates" />
                <Tab label="Gifts" />
                <Tab label="Cakes" />
                <Tab label="Flowers" />
                <Tab label="Beverages" />
                <Tab label="Snacks" />
                <Tab label="Sweets" />
                <Tab label="All" />
                <Tab label="Chocolates" />
                <Tab label="Gifts" />
                <Tab label="Cakes" />
                <Tab label="Flowers" />
                <Tab label="Beverages" />
                <Tab label="Snacks" />
                <Tab label="Sweets" />
              </Tabs>
            </div>
          </div>

          <ProductSlider items={5} />
        </div>
      </section>
      <section className="py-5 pt-2 bg-white">
        <div className="container">
          <div className="freeShipping w-full py-2 p-4 border-2 border-[#b44410] flex items-center justify-around rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600]">Free Shipping</span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free shipping on minimum order{" "}
                <span className="text-[#ff5252]">- Only ₹999*</span>
              </p>
            </div>

            {/* <p className="font-bold text-[20px] ">- Only ₹999*</p> */}
          </div>

          <AdsBannerV2 items={4} />
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductSlider items={5} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductSlider items={5} />
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <AdsBanner items={4} />
          <div className="py-3"></div>
          <h2 className="flex items-start justify-start text-[20px] font-[600]">
            Follow us on Instagram
          </h2>
          <div className="h-6"></div>
          <Swiper
            slidesPerView={5}
            spaceBetween={25}
            navigation={false}
            modules={[Navigation]}
            className="instagramSlider mt-4"
          >
            <SwiperSlide>
              <InstagramSlider />
            </SwiperSlide>

            <SwiperSlide>
              <InstagramSlider />
            </SwiperSlide>

            <SwiperSlide>
              <InstagramSlider />
            </SwiperSlide>

            <SwiperSlide>
              <InstagramSlider />
            </SwiperSlide>

            <SwiperSlide>
              <InstagramSlider />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* <section className="py-5 pt-4 pb-8 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
              <div className="h-5"></div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}

      {/* <section className="py-6 pt-0 bg-white">
        <div className="container flex flex-col lg:flex-row gap-5">
          <div className="part1 w-full lg:w-[70%]">
            <div className="swiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress homeSliderV2 swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                style={{
                  transitionDuration: '0ms',
                  transitionDelay: '0ms'
                }}
              >
                <div
                  className="swiper-slide swiper-slide-next swiper-slide-prev"
                  style={{
                    width: '742px',
                    opacity: 1,
                    transform: 'translate3d(0px, 0px, 0px)',
                    transitionDuration: '0ms'
                  }}
                  data-swiper-slide-index="1"
                >
                  <div className="item w-full rounded-md overflow-hidden relative">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg"
                      className="w-full"
                    />
                    <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
                      <h4 className="text-[12px] lg:text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 hidden lg:block">
                        Big saving days sale
                      </h4>
                      <h2 className="text-[15px] lg:text-[30px] font-[700] w-full relative -right-[100%] opacity-0">
                        Buy New Trend Women Black Cott...
                      </h2>
                      <h3 className="flex items-center gap-0 lg:gap-3 text-[12px] lg:text-[18px] font-[500] w-full text-left mt-3 mb-0 lg:mb-3 relative -right-[100%] opacity-0 flex-col lg:flex-row">
                        <span className="w-full lg:w-max hidden lg:block">
                          Starting At Only
                        </span>
                        <span
                          className="text-primary text-[16px] lg:text-[30px] 
                  font-[700] block lg:inline w-full lg:w-max"
                        >
                          ₹1,550.00
                        </span>
                      </h3>
                      <div className="w-full relative -right-[100%] opacity-0 btn_">
                        <a
                          href="/product/67db85da6e949cc6cd65344b"
                          data-discover="true"
                        >
                          <button
                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary btn btn-org css-iyey26"
                            // tabindex="0"
                            type="button"
                          >
                            SHOP NOW
                            <span className="MuiTouchRipple-root css-4mb1j7"></span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                  style={{
                    width: '742px', 
                    opacity: 1, 
                    transform: 'translate3d(-742px, 0px, 0px)',
                    transitionDuration: '0ms'
                  }}
                  data-swiper-slide-index="0"
                >
                  <div className="item w-full rounded-md overflow-hidden relative">
                    <img
                      src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg"
                      className="w-full"
                    />
                    <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
                      <h4 className="text-[12px] lg:text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 hidden lg:block">
                        Big saving days sale
                      </h4>
                      <h2 className="text-[15px] lg:text-[30px] font-[700] w-full relative -right-[100%] opacity-0">
                        Apple iPhone 13 128 GB, Pink
                      </h2>
                      <h3 className="flex items-center gap-0 lg:gap-3 text-[12px] lg:text-[18px] font-[500] w-full text-left mt-3 mb-0 lg:mb-3 relative -right-[100%] opacity-0 flex-col lg:flex-row">
                        <span className="w-full lg:w-max hidden lg:block">
                          Starting At Only
                        </span>
                        <span
                          className="text-primary text-[16px] lg:text-[30px] 
                  font-[700] block lg:inline w-full lg:w-max"
                        >
                          ₹35,500.00
                        </span>
                      </h3>
                      <div className="w-full relative -right-[100%] opacity-0 btn_">
                        <a
                          href="/product/67db8aeb6e949cc6cd65380f"
                          data-discover="true"
                        >
                          <button
                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary btn btn-org css-iyey26"
                            // tabindex="0"
                            type="button"
                          >
                            SHOP NOW
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span className="swiper-pagination-bullet"></span>
                <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              </div>
            </div>
          </div>
          <div className="part2 scrollableBox w-full lg:w-[30%] flex items-center gap-5 justify-between flex-row lg:flex-col">
            <div className="bannerBoxV2 box w-full overflow-hidden rounded-md group relative">
              <img
                src="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
                className="w-full transition-all duration-150 group-hover:scale-105"
              />
              <div
                className="info absolute p-5 top-0 right-0 w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2 
        pl-16"
              >
                <h2 className="text-[14px] md:text-[18px] font-[600]">
                  Buy Men's Footwear with low price
                </h2>
                <span className="text-[20px] text-primary font-[600] w-full">
                  ₹1500
                </span>
                <div className="w-full">
                  <a
                    className="text-[16px] font-[600] link"
                    href="/products?subCatId=67cfa5853c7fa6b8e3276fa9"
                    data-discover="true"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
            <div className="bannerBoxV2 box w-full overflow-hidden rounded-md group relative">
              <img
                src="https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"
                className="w-full transition-all duration-150 group-hover:scale-105"
              />
              <div
                className="info absolute p-5 top-0 left-0 w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2 
        "
              >
                <h2 className="text-[14px] md:text-[18px] font-[600]">
                  Buy Apple Iphone
                </h2>
                <span className="text-[20px] text-primary font-[600] w-full">
                  ₹45000
                </span>
                <div className="w-full">
                  <a
                    className="text-[16px] font-[600] link"
                    href="/products?subCatId=67cfa5063c7fa6b8e3276f79"
                    data-discover="true"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
