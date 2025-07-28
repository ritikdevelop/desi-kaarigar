import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-8 pb-8">
            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-red-400 group-hover:-translate-y-1 " />
              <h3 className="text-[16px] font-[500] mt-3">Free Shipping</h3>
              <p className="text-[14px] font-[400]">On orders over ₹999</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-red-400 group-hover:-translate-y-1 " />
              <h3 className="text-[16px] font-[500] mt-3">Secured Payment</h3>
              <p className="text-[14px] font-[400]">Payment Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-red-400 group-hover:-translate-y-1 " />
              <h3 className="text-[16px] font-[500] mt-3">Special Gifts</h3>
              <p className="text-[14px] font-[400]">Our First Product Order</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[20%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-red-400 group-hover:-translate-y-1 " />
              <h3 className="text-[16px] font-[500] mt-3">Support 24/7</h3>
              <p className="text-[14px] font-[400]">Contact us Anytime</p>
            </div>
          </div>
          <br />
          <hr className="text-gray-300" />

          <div className="footer flex py-12">
            <div className="part1 w-[25%] border-r border-gray-300">
              <h2 className="text-[20px] font-[600] mb-4 text-gray-700">
                Contact us
              </h2>
              <p className="text-[14px] font-[400] pb-4 text-gray-500">
                Classyshop - ABC, New Delhi
              </p>
              <Link
                className="link text-gray-500"
                to="mailto:someone@example.com"
              >
                sales@classy.com
              </Link>
              <br />
              <span className="text-[22px] font-[600] text-red-400 blok w-full mt-3 mb-5">
                +91-0987654321
              </span>

              <div className="flex items-center gap-2 py-2">
                <IoChatboxOutline className="text-[40px] text-red-400" />
                <span className="text-[16px] font-[600] text-gray-800">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex pl-8">
              {/* //TOdo: Products Column 1 */}
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[20px] font-[600] mb-4 text-gray-700">
                  Products
                </h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      Price drop
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      New Products
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      Best Sales
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      Contact Us
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              {/* //TOdo: Our Company Column 2 */}
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[20px] font-[600] mb-4 text-gray-700">
                  Our Company
                </h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      Terms and conditions of use
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      About us
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      Secure payment
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full py-1 text-gray-500">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2 w-[35%] flex pl-8 flex-col pr-8">
              <h2 className="text-[18px] font-[600] mb-4 text-gray-700">
                Subscribe to our newsletter
              </h2>
              <p className="text-[13px] py-1 text-gray-500">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>

              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[35px] border border-gray-300 outline-none pl-4 pr-4 rounded-sm mb-4 placeholder:text-gray-300 placeholder:text-[12px]"
                  placeholder="Your Email Address"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms and conditions and the privacy policy"
                  className="text-sm text-gray-500 py-2 mb-4"
                />
                <Button className="btn-org">SUBSCRIBE</Button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-gray-300 py-3 bg-white">
        <div className="container items-center justify-between flex">
          <ul className="flex items-center gap-2">
            {/* //todo: Facebook Icon */}
            <li className="list-none">
              <Link
                to="/"
                target="blank"
                className="w-[35px] h-[35px] rounded-full border border-gray-200 flex items-center justify-center group hover:bg-red-400 transition-all duration-300"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />
              </Link>
            </li>

            {/* //todo: Youtube Icon */}
            <li className="list-none">
              <Link
                to="/"
                target="blank"
                className="w-[35px] h-[35px] rounded-full border border-gray-200 flex items-center justify-center group hover:bg-red-400 transition-all duration-300"
              >
                <AiOutlineYoutube className="text-[15px] group-hover:text-white" />
              </Link>
            </li>

            {/* //todo: Instagram icon */}
            <li className="list-none">
              <Link
                to="/"
                target="blank"
                className="w-[35px] h-[35px] rounded-full border border-gray-200 flex items-center justify-center group hover:bg-red-400 transition-all duration-300"
              >
                <FaInstagram className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p className="text-[13px] text-gray-500 text-center mb-0">
            © 2023 ClassyShop. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <img src="./carte_bleue.png" alt="image" />
            <img src="./visa.png" alt="image" />
            <img src="./master_card.png" alt="image" />
            <img src="./american_express.png" alt="image" />
            <img src="./paypal.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
