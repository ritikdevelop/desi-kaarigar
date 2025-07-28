import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";

const CategoryCollapse = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCategories(newOpen);
  };

  const openSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  return (
    <div className="scroll">
      <ul className="w-full">
        <li className="list-none flex items-center relative flex-col">
          <Button className="w-full !text-gray-600 !font-semibold !text-left !justify-start !px-3">
            Collection
          </Button>

          {subMenuIndex === 0 ? (
            <FaRegSquareMinus
              className="text-[14px] absolute top-[10px] right-[15px] cursor-pointer hover:text-red-400 transition"
              onClick={() => openSubMenu(0)}
            />
          ) : (
            <FaRegSquarePlus
              className="text-[14px] absolute top-[10px] right-[15px] cursor-pointer hover:text-red-400 transition"
              onClick={() => openSubMenu(0)}
            />
          )}

          {subMenuIndex === 0 && (
            <ul className="submenu w-full pl-3">
              <li className="list-none relative">
                <Button className="w-full !text-gray-600 !text-left !font-semibold !justify-start !px-3 !text-[12px]">
                  Hindi Series
                </Button>
              </li>
              <li className="list-none relative">
                <Button className="w-full !text-gray-600 !text-left !justify-start !px-3 !text-[12px] !font-semibold">
                  Bengali Series
                </Button>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Button className="w-full !text-gray-600 !font-semibold !text-left !justify-start !px-3">
            Collection
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default CategoryCollapse;
