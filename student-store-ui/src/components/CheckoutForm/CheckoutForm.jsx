import * as React from "react";
import "./CheckoutForm.css";

// Manage user email, name, and receipt
export default function CheckoutForm(props) {
  return (
    <section className="checkout-form">
      <p className="title">Payment Info</p>

      {/* Name Input */}
      <div className="input-field">
        <p className="label">Name</p>
        <div className="control">
          <input
            className="checkout-form-input"
            type="name"
            name="name"
            placeholder="Student Name"
            value={props.checkoutForm.name}
            onChange={(e) =>
              props.handleOnCheckoutFormChange("name", e.target.value)
            }
          ></input>
        </div>
      </div>

      {/* Email Input */}
      <div className="input-field">
        <p className="label">Email</p>
        <div className="control">
          <input
            className="checkout-form-input"
            type="email"
            name="email"
            placeholder="student@codepath.org"
            onChange={(e) =>
              props.handleOnCheckoutFormChange("email", e.target.value)
            }
            value={props.checkoutForm.email}
            required
          ></input>
        </div>
      </div>

      <button
        className="checkout-button"
        onClick={() =>
          props.handleOnSubmitCheckoutForm(
            props.checkoutForm,
            props.shoppingCart
          )
        }
      >
        Checkout
      </button>

      {/* Displays receipt or error */}
      {props.receipt ? (
        <>
          {props.error === "Success!" ? (
            <div className="success">
              <h1>Success!</h1>
              <ul>
                {props.receipt.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="error">
              <ul>
                {props.receipt.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
          <h1></h1>
        </>
      )}
    </section>
  );
}
