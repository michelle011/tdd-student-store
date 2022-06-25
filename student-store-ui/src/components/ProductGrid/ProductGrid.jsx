import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  return (
    <div className="product-grid">
      {props.products
        ? props.products.map((product, idx) => {
            return (
              <ProductCard
                product={product}
                productId={product.id}
                showDescription={false}
                key={idx}
                handleAddItemToCart={props.handleAddItemToCart}
                handleRemoveItemForCart={props.handleRemoveItemForCart}
              />
            );
          })
        : null}
    </div>
  );
}
