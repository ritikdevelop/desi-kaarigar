import React, { createContext, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing/page";
import Footer from "./components/Footer/page";
import FluidCursor from "./components/CustomCursor/page";
import ProductDetails from "./pages/ProductDetails/page";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom/page";
import { IoCloseSharp } from "react-icons/io5";
import ProductDetailsModal from "./components/ProductDetails/page";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CartPage from "./pages/Cart/page";
import CheckOutPage from "./pages/Checkout/page";


const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const vales = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel
  };

  return (
    <>
      {/* <FluidCursor /> */}
      <BrowserRouter>
        <MyContext.Provider value={vales}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      {/*//Section: Product Details Modal */}
      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-gray-900
            !absolute top-[0px] right-[0px] !bg-[#f1f1f1] "
              onClick={handleCloseProductDetailsModal}
            >
              <IoCloseSharp />
            </Button>
            <div className="col1 w-[40%] ">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] py-5 px-8 pr-16 productContent">
              <ProductDetailsModal />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      
    </>
  );
}

export default App;

export { MyContext };
