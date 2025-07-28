import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import CategoryCollapse from "../../CategoryCollapse/page";

const Categories = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCategories(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px] hover:text-red-400"
        />
      </h3>

      {/* //Todo: Category Collapse */}
      <CategoryCollapse />
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenCategories} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Categories;
