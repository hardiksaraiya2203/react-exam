import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./Products";
import Contact from "./Contact"

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routing;
