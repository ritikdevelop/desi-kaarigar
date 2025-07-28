import React from "react";
import "../BannerBoxes/style.css";
import { Link } from "react-router-dom";

const BannerBoxes = (props) => {
  return (
    <div className="bannerBoxes w-full overflow-hidden rounded-md group relative">
      <img src={props.image} alt="bannerbox image" className="w-full transition-all duration-300 group-hover:scale-105" />

      <div className={`info absolute p-5 top-0 ${props.info ==="left" ? 'left-0' : 'right-0'} w-[50%] h-[100%] z-50 flex items-center justify-center flex-col gap-2`}>
        <h2 className="text-[20px] font-[600] ">Mern Stack Web</h2>

        <span className="text-[25px] text-red-400 font-[600] w-full ">$100.00</span>

        <div className="w-full text-[14px] font-[600] hover:transition-all hover:duration-300 hover:transform hover:scale-105 ">
          <Link className="underline  " to='/'>SHOP NOW</Link>
        </div>
      </div>


    </div>
  );
}; 

export default BannerBoxes;
