import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Categories from "./Categories";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Navigation component renders a navigation bar with several category links.
 * It includes a button to toggle a categories panel and links to various occasions.
 * 
 * State:
 * - isOpenCategories: Boolean state to manage the visibility of the categories panel.
 * 
 * Props passed to Categories component:
 * - isOpenCategories: Boolean state to indicate if the categories panel is open.
 * - setIsOpenCategories: Function to update the isOpenCategories state.
 * 
 * The navigation bar includes links for events like Father's Day, Mother's Day,
 * Occasions, Anniversary, Birthday, Rakhi, Bhai Dooj, and Combos.
 */

/*******  302a65e2-c07c-452b-bc1b-4f83fc84b6c8  *******/
const Navigation = () => {

  const [isOpenCategories, setIsOpenCategories] = useState(false);

  const openCategoriesPanel = () => {
    setIsOpenCategories(true);
  }

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-start gap-2">
          <div className="col_1 w-[25%]">
            <Button className="!text-black !font-semibold gap-2 w-full" onClick={openCategoriesPanel}>
              <RiMenu2Fill className="text-[14px]" />
              Shop By Categories
              <FaAngleDown />
            </Button>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />

          <div className="col_2 w-full">
            <ul className="flex items-center gap-6">
              {/* Father's Day Link */}
              <li className="list-none">
                <Link
                  to={"/fathers-day"}
                  className="link transition text-[13px] font-[400]"
                >
                  Father's Day
                </Link>
              </li>

              {/* Mothers Day Link */}
              <li className="list-none">
                <Link
                  to={"/mothers-day"}
                  className="link transition text-[13px] font-[400]"
                >
                  Mother's Day
                </Link>
              </li>

              {/* Occasions Link */}
              <li className="list-none">
                <Link
                  to={"/occasions"}
                  className="link transition text-[13px] font-[400]"
                >
                  Occasions
                </Link>
              </li>

              {/* Anniversary Link */}
              <li className="list-none">
                <Link
                  to={"/anniversary"}
                  className="link transition text-[13px] font-[400]"
                >
                  Anniversary
                </Link>
              </li>

              {/* Birthday Link */}
              <li className="list-none">
                <Link
                  to={"/birthday"}
                  className="link transition text-[13px] font-[400]"
                >
                  Birthday
                </Link>
              </li>


              {/* Rakhi Link */}
              <li className="list-none">
                <Link
                  to={"/rakhi"}
                  className="link transition text-[13px] font-[400]"
                >
                  Rakhi
                </Link>
              </li>

              {/* Bhai Dooj Link */}
              <li className="list-none">
                <Link
                  to={"/bhai-dooj"}
                  className="link transition text-[13px] font-[400]"
                >
                  Bhai Dooj
                </Link>
              </li>

              {/*Combos Link */}
              <li className="list-none">
                <Link
                  to={"/combos"}
                  className="link transition text-[13px] font-[400]"
                >
                  Combos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* //TOdo: Categories */}
      <Categories  isOpenCategories={isOpenCategories}
      setIsOpenCategories={setIsOpenCategories} />
    </>
  );
};

export default Navigation;
