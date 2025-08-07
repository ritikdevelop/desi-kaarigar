import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import "./style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const SideBar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full pr-5 flex items-center justify-between mb-3 text-[16px] font-[500]">
          Shop By Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto "
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? (
              <FaAngleUp className="link text-gray-800" />
            ) : (
              <FaAngleDown className="link text-gray-800" />
            )}
          </Button>
        </h3>
      </div>
      <Collapse isOpened={isOpenCategoryFilter}>
        <div className="scroll px-3 -left-[10px] relative">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Occasions"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Father's Day"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Mother's Day"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Bhai Dooj"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Anniversary"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Birthday"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Festival"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Hindi Series"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Bengali Series"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Wedding"
            className="w-full"
          />
        </div>
      </Collapse>

      {/* <div className="box py-6">
        <h3 className="w-full flex items-center mb-3 text-[16px] font-[500] pr-5">
          Filter By Price
        </h3>

        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange justify-between items-center">
          <span className="text-[13px]">
            FROM: <strong className="text-gray-950">RS: {149} </strong>
          </span>
          <span className="ml-auto text-[13px] pl-1">
            TO: <strong className="text-gray-950">RS: {500} </strong>
          </span>
        </div>
      </div> */}
    </aside>
  );
};

export default SideBar;
