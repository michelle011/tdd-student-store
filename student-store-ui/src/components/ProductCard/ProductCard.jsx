import * as React from "react";
import "./ProductCard.css";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemForCart,
  showDescription,
}) {
  return (
    <div className="productCard">
      <p>Product Card</p>
    </div>
  );
}
