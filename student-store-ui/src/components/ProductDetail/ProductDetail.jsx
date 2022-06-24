import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const [product, setProduct] = useState(null);

  return (
    <div className="product-detail">
      <Navbar />
    </div>
  );
}
