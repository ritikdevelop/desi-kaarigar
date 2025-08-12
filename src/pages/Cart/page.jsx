import React from "react";
import { Button } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";
import CartItems from "./CartItem";

const CartPage = () => {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-red-400">3 </span>
                products in your cart
              </p>
            </div>
            <CartItems qty={1} />
            <CartItems qty={1} />
            <CartItems qty={1} />
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr className="text-gray-200" />

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-red-400 font-bold">₹1,298.00</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimate for</span>
              <span className="font-bold">India</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">total</span>
              <span className="text-red-400 font-bold">₹1,298.00</span>
            </p>
            <br />
            <Button className="btn-org btn-lg w-full flex gap-2">
              <BsFillBagCheckFill className="text-[20px]" />
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
