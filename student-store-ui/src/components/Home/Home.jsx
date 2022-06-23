import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

// use axios here
//{ products, handleAddItemToCart, handleRemoveItemFromCart }) {
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <p>Home</p>
    </div>
  );
}
