import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm(props) {
  return (
    <section className="checkout-form">
      <p className="title">Payment Info</p>

      <div className="input-field">
        <p className="label">Name</p>
        <div className="control">
          <input
            className="checkout-form-input"
            type="name"
            name="name"
            placeholder="Student Name"
          ></input>
        </div>
      </div>

      <div className="input-field">
        <p className="label">Email</p>
        <div className="control">
          <input
            className="checkout-form-input"
            type="email"
            name="email"
            placeholder="student@codepath.org"
            required
          ></input>
        </div>
      </div>

      <button className="checkout-button">Checkout</button>
    </section>
  );
}
