import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer">
        <img
          src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
          className="w-full transition-all duration-500 group-hover:scale-105"
          alt="image"
        />
      </div>

      <div className="info py-4">
        <span className="flex items-start justify-start text-[12px] font-[400] gap-2 mb-2 text-red-400">
          <IoMdTime className="text-[16px]" /> 08 July 2025
        </span>
        <h2 className="text-[16px] font-[500] text-gray-800">
          <Link to="/" className="link">
            Lorem ipsum dolor sit
          </Link>
        </h2>
        <p className="text-[14px] font-[400] text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          maxime laboriosam at repudiandae nihil, delectus consequatur pariatur?
          Error, maiores aliquid.
        </p>

        <Link className="link text-red-400 underline text-[14px] flex items-center gap-1">
          Read More <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
