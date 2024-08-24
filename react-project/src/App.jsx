import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./Pages/Home";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Basket";
import Navbar from "./components/Navbar";
import CategoriesNavbar from "./components/CategoriesNavbar";
import SearchProduct from "./Pages/SearchProduct";
import { ExampleProvider } from "./ExampleContext";

import "./App.css";
import Categories from "./Pages/Categories";

function App() {
  return (
    <ExampleProvider>
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CategoriesNavbar />
                  <Home />
                </>
              }
            />
            <Route
              path="/product/:id"
              element={
                <>
                  <CategoriesNavbar />
                  <ProductDetail />
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:id" element={<Categories />} />
            <Route path="/product" element={<SearchProduct />} />
          </Routes>
        </div>
      </Router>
    </ExampleProvider>
  );
}

export default App;
