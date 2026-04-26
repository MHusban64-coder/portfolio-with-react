import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetail from "../pages/ProductDetail";
import About from "../pages/About";
import Signup from "../pages/Signup";
import Navbar from "../components/Navbar";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";


function Routing() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:title" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />}>
          <Route index element={<Checkout />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}
export default Routing;
