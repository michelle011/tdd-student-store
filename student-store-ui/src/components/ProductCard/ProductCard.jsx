import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + productId}>
          <img className="product-image" src={product.image}></img>
        </Link>
      </div>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {quantity > 0 ? <p className="quantity">{quantity}</p> : null}
      </div>

      <div>
        {showDescription ? (
          <p className="product-description">{product.description}</p>
        ) : null}
      </div>
      <div className="add-remove-btns">
        <button
          className="remove-btn"
          onClick={() => {
            handleRemoveItemFromCart(productId);
          }}
        >
          -
        </button>
        <button
          className="add-btn"
          onClick={() => {
            handleAddItemToCart(productId);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
