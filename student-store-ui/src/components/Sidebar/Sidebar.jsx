import * as React from "react";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section className="sidebar">
      {isOpen ? (
        <div className="sidebar-open">
          <button
            className="close-sidebar-button"
            onClick={handleOnToggle}
          ></button>
        </div>
      ) : (
        <div className="sidebar-closed">
          <div className="button-wrap">
            <button
              className="open-sidebar-button"
              onClick={handleOnToggle}
            ></button>
          </div>
        </div>
      )}
    </section>
  );
}
