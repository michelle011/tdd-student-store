import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

// use axios here
//{ products, handleAddItemToCart, handleRemoveItemFromCart }) {
export default function Home(props) {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <Sidebar handleOnToggle={props.handleOnToggle} /> */}
      <ProductGrid
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemForCart={props.handleRemoveItemFromCart}
      />
    </div>
  );
}
