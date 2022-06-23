import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Hero from "../Hero/Hero";
import Home from "../Home/Home";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import ProductCard from "../ProductCard/ProductCard";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductView from "../ProductView/ProductView";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Sidebar from "../Sidebar/Sidebar";

export default function App() {
  const [products, setProducts] = useState([]); //array of product objects, empty initially
  const [isFetching, setIsFetching] = useState(null); //boolean; represents whether App is currently fetching products from the API
  const [error, setError] = useState(""); //display message when something goes wrong with API requests
  const [isOpen, setIsOpen] = useState(null); //represents whether the sidebar is open or not
  const [shoppingCart, setShoppingCart] = useState([]); //store state for users shopping cart (what they want and the quantity)
  const [checkoutForm, setCheckoutForm] = useState(null); //users info which will be sent to the API at checkout

  const url = `https://codepath-store-api.herokuapp.com/store`;

  useEffect(async () => {
    await axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // if (isOpen) {
  //   setIsOpen(false);
  // } else {
  //   setIsOpen(true);
  // }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="navbar" element={<Navbar />} />
            <Route path="sidebar" element={<Sidebar />} />
          </Routes>
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}

/* import routes, components, will need to add components, 
define ur routes, then link them
// components for: product card, 
<Route path="groups" components={{main: Groups, sidebar: GroupsSidebar}} />
<Route path="users" components={{main: Users, sidebar: UsersSidebar}}>
*/
