import * as React from "react";

import "./Sidebar.css";

import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import CheckoutForm from "../CheckoutForm/CheckoutForm.jsx";

// Renders sidebar, with cart and checkout form on open sidebar
export default function Sidebar(props) {
  return (
    <section className="sidebar">
      {
        // toggle open/close sidebar
        props.isOpen ? (
          <div className="sidebar-opened">
            <button
              className="close-sidebar-btn"
              onClick={props.handleOnToggle}
            >
              ⬅
            </button>

            {/* Displays shopping cart */}
            <ShoppingCart
              isOpen={props.isOpen}
              products={props.products}
              shoppingCart={props.shoppingCart}
            />

            {/* Displays checkout form */}
            <CheckoutForm
              isOpen={props.isOpen}
              shoppingCart={props.shoppingCart}
              checkoutForm={props.checkoutForm}
              error={props.error}
              handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
              receipt={props.receipt}
            />
          </div>
        ) : (
          <div className="sidebar-closed">
            <button className="open-sidebar-btn" onClick={props.handleOnToggle}>
              🛒
            </button>
          </div>
        )
      }
    </section>
  );
}
