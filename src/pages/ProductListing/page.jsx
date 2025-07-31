import React, { useState } from "react";
import SideBar from "../../components/SideBar/page";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem/page";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";

const ProductListing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-5 pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Birthday
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white py-2 mt-3">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <SideBar />
          </div>

          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 w-full mb-2 rounded-md flex items-center justify-end">
              {/* <div className="col1 flex items-center gap-3">
                <Button
                  className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-gray-800"
                  onClick={() => setItemView("list")}
                >
                  <LuMenu />
                </Button>

                <Button
                  className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-gray-800"
                  onClick={() => setItemView("grid")}
                >
                  <IoGridSharp />
                </Button>
              </div> */}

              <div className="col1 flex items-center justify-end gap-3 pr-4">
                <span className="flex justify-end pl-3 text-[14px]">
                  Sort By:
                </span>

                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[13px] !text-gray-900 !font-[550] !capitalize !border-1 !border-red-400 "
                >
                  Recommended
                </Button>

                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name, A TO Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name, Z TO A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Price, Low to High
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Price, High to Low
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 py-2">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>

            <div className="flex items-center justify-center mt-2">
              <Pagination count={4} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
