import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";


const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border border-gray-200">
      <div className="group imgWrapper w-[100%] h-[200px] overflow-hidden rounded-md relative">
        <img
          src="https://www.fnp.com/images/pr/l/v300/delectable-chocolates-in-floral-box-21-pcs_1.jpg"
          alt="img"
          className="w-full"
        />
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-red-400 text-white rounded-md p-1 text-[12px] font-[400]">
          10%
        </span>

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-4 flex-col w-[50px] transition-all duration-800 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] hover:text-white !rounded-full !bg-white text-black hover:!bg-red-500 group">
            <FaRegHeart className="text-[18px] text-black group-hover:text-white hover:!text-white" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] hover:text-white !rounded-full !bg-white text-black hover:!bg-red-500 group">
            <IoGitCompareOutline className="text-[18px] text-black group-hover:text-white hover:!text-white" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] hover:text-white !rounded-full !bg-white text-black hover:!bg-red-500 group">
            <MdZoomOutMap className="text-[18px] text-black group-hover:text-white hover:!text-white" />
          </Button>
        </div>
      </div>

      <div className="info p-3 py-4">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Chocolates
          </Link>
        </h6>
        <h3 className="text-[16px] title mt-1 mb-2 font-[500]">Kit kat</h3>
        <Rating name="size-small" defaultValue={2} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[14px] font-bold">
            ₹58
          </span>
          <span className="price text-red-500 font-bold">₹58</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
