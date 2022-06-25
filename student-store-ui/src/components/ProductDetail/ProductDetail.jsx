import "./ProductDetail.css";

import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail(props) {
  const [product, setProduct] = useState("");
  let { productId } = useParams();
  let quantity = 0;

  useEffect(() => {
    async function getInfo() {
      // props.setIsFetching(true);
      await axios
        .get("https://codepath-store-api.herokuapp.com/store" + { productId })
        .then((response) => {
          setProduct(response.data.product);
          // props.setIsFetching(false);
        })
        .catch((error) => {
          <NotFound />;
        });
    }
    getInfo();
  }, []);

  return (
    <div className="product-detail">
      <ProductView
        product={product}
        productId={product.id}
        quantity={quantity}
        showDescription={true}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemForCart={props.handleRemoveItemForCart}
      />
    </div>
  );
}
