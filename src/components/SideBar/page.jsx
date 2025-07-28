import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";

const SideBar = () => {
  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="mb-3 text-[18px] font-[500]">
          Shop by Category
          <div className="scroll">
            <FormControlLabel control={<Checkbox />} label="label" />
          </div>
        </h3>
      </div>
    </aside>
  );
};

export default SideBar;
