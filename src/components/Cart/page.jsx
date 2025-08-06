import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";

const CartModal = () => {
  return (
    <>
      <div className="scroll w-full h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pt-2 pb-2">
          <div className="img w-[25%] overflow-hidden h-[110px] rounded-md">
            <Link to="/product/84758" className="block group">
              <img
                src="https://www.fnp.com/images/pr/l/v300/delectable-chocolates-in-floral-box-21-pcs_1.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="info w-[75%] gap-5 px-5 relative">
            <h4 className="text-[16px] font-[500]">
              <Link to="/product/4558" className="link transition-all">
                Delectable Chocolates
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                QTY: <span> 2 </span>
              </span>
              <span className="text-red-400 font-bold">Price: ₹58</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

        <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pt-4 pb-2">
          <div className="img w-[25%] overflow-hidden h-[110px] rounded-md">
            <Link to="/product/84758" className="block group">
              <img
                src="https://www.fnp.com/images/pr/l/v300/delectable-chocolates-in-floral-box-21-pcs_1.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="info w-[75%] gap-5 px-5 relative">
            <h4 className="text-[16px] font-[500]">
              <Link to="/product/4558" className="link transition-all">
                Delectable Chocolates
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                QTY: <span> 2 </span>
              </span>
              <span className="text-red-400 font-bold">Price: ₹58</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

         <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pt-4 pb-2">
          <div className="img w-[25%] overflow-hidden h-[110px] rounded-md">
            <Link to="/product/84758" className="block group">
              <img
                src="https://www.fnp.com/images/pr/l/v300/delectable-chocolates-in-floral-box-21-pcs_1.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="info w-[75%] gap-5 px-5 relative">
            <h4 className="text-[16px] font-[500]">
              <Link to="/product/4558" className="link transition-all">
                Delectable Chocolates
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                QTY: <span> 2 </span>
              </span>
              <span className="text-red-400 font-bold">Price: ₹58</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

         <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pt-4 pb-2">
          <div className="img w-[25%] overflow-hidden h-[110px] rounded-md">
            <Link to="/product/84758" className="block group">
              <img
                src="https://www.fnp.com/images/pr/l/v300/delectable-chocolates-in-floral-box-21-pcs_1.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="info w-[75%] gap-5 px-5 relative">
            <h4 className="text-[16px] font-[500]">
              <Link to="/product/4558" className="link transition-all">
                Delectable Chocolates
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                QTY: <span> 2 </span>
              </span>
              <span className="text-red-400 font-bold">Price: ₹58</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

         <div className="cartItem w-full flex items-center gap-4 border-b border-gray-200 pt-4 pb-2">
          <div className="img w-[25%] overflow-hidden h-[110px] rounded-md">
            <Link to="/product/84758" className="block group">
              <img
                src="https://www.fnp.com/images/pr/l/v300/delectable-chocolates-in-floral-box-21-pcs_1.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="info w-[75%] gap-5 px-5 relative">
            <h4 className="text-[16px] font-[500]">
              <Link to="/product/4558" className="link transition-all">
                Delectable Chocolates
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                QTY: <span> 2 </span>
              </span>
              <span className="text-red-400 font-bold">Price: ₹58</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
      
        
      </div>

      <br />
      <div className="bottomSection absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5">
        <div className="bottomInfo w-full border-t border-gray-200 py-3 flex items-center justify-between px-4 flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[15px] font-[600]">1 Item</span>
            <span className="text-red-400 font-bold">₹58</span>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-[15px] font-[600]">Shipping</span>
            <span className="text-red-400 font-bold">₹58</span>
          </div>
        </div>

        <div className="bottomInfo w-full border-t border-gray-200 py-3 flex items-center justify-between px-4 flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[15px] font-[600]">1 Item</span>
            <span className="text-red-400 font-bold">₹58</span>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-[15px] font-[600]">Shipping</span>
            <span className="text-red-400 font-bold">₹58</span>
          </div>

          <br />
          <div className="flex items-center justify-between w-full gap-5">
            <Link to="/cart" className="w-[50%] d-block">
              <Button
                className="btn-org btn-lg
          w-full"
              >
                View Cart
              </Button>
            </Link>

            <Link to="/checkout" className="w-[50%] d-block">
              <Button
                className="btn-org btn-lg
          w-full"
              >
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
