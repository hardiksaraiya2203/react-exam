import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./Products";
import Contact from "./Contact"
import ContactManagement from "./ContactManagement"

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ContactManagement" element={<ContactManagement />} />
      </Routes>
    </div>
  );
};

export default Routing;
