import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchBar from "../SearchBar/SearchBar";
import Selector from "../Selector/Selector";

// Renders header, searchbar, and product grid
export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <SearchBar
        handleOnSearchBarChange={props.handleOnSearchBarChange}
        setSearchBar={props.setSearchBar}
        products={props.products}
      />

      <div className="selector">
        {props.categories.map((category, idx) => (
          <Selector
            key={idx}
            label={category}
            isActive={props.selectedCategory == category}
            onClick={() => {
              props.setSelectedCategory(category);
            }}
          />
        ))}
      </div>

      <ProductGrid
        products={props.products}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
        setIsFetching={props.setIsFetching}
        searchBar={props.searchBar}
      />
    </div>
  );
}
