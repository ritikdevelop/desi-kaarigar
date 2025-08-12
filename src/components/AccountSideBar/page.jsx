import React from "react";
import { FaCloudUploadAlt, FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router";
import Button from "@mui/material/Button";

const AccountSideBar = () => {
  return (
    <div className="card shadow-md bg-white rounded-md sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden !mb-4 relative group">
          <img
            src="https://i.pinimg.com/236x/45/1b/17/451b178cc7fe8aed45c0e532f2c086f2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />

          <div
            className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 
                bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100"
          >
            <FaCloudUploadAlt className="text-[22px] text-[#fff]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
          </div>
        </div>

        <h3>Name of the user</h3>
        <h6 className="text-[13px] font-[500] text-gray-500">
          test23@gmail.com
        </h6>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !justify-start !px-5 !capitalize !text-gray-600 !rounded-none flex item-center gap-2">
              <FaRegUser className="text-[18px]" /> My Profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-orders" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2  !justify-start !px-5 !capitalize !text-gray-600 !rounded-none flex item-center gap-2">
              <IoBagCheckOutline className="text-[18px]" /> My Orders
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/wishlist" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !justify-start !px-5 !capitalize !text-gray-600 !rounded-none flex item-center gap-2">
              <IoMdHeartEmpty className="text-[18px]" /> Wishlist
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/" exact={true} activeClassName="isActive">
            <Button className="w-full !text-left !py-2 !justify-start !px-5 !capitalize !text-gray-600 !rounded-none flex item-center gap-2">
              <IoIosLogOut className="text-[18px]" /> Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
