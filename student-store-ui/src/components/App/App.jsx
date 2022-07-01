import "./App.css";

import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import Sidebar from "../Sidebar/Sidebar";

export default function App() {
  // Initialize state variables and setter fns
  const [isFetching, setIsFetching] = useState(true); // boolean; represents whether App is currently fetching products from the API
  const [error, setError] = useState(false); // display message when something goes wrong with API requests
  const [products, setSelectedProducts] = useState([]); // array of product objects, empty initially
  const [isOpen, setIsOpen] = useState(false); // represents whether the sidebar is open or not
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchBar, setSearchBar] = useState(""); // for search results
  const [shoppingCart, setShoppingCart] = useState([]); // store state for users shopping cart (what they want and the quantity)
  const [checkoutForm, setCheckoutForm] = useState({ email: "", name: "" }); // users info which will be sent to the API at checkout
  const [receipt, setReceipt] = useState();
  const [selectedEmail, setSelectedEmail] = useState("");
  const [orders, setOrders] = useState([]);
  const categories = [
    "All Categories",
    "food",
    "clothing",
    "accessories",
    "tech",
  ];

  /* Create 'GET' request to API's store endpoint with axios.
   * If successful, store data in `products`. Otherwise, throw error hook.
   */
  useEffect(async () => {
    await axios
      .get(`https://codepath-store-api.herokuapp.com/store`)
      .then((response) => {
        {
          console.log(response);
          response.data
            ? setSelectedProducts(response.data.products)
            : setError("No products found.");
        }
      })
      .catch((error) => {
        if (!error.response) {
          // network error
          this.errorStatus = "Error: Network Error";
        } else {
          this.errorStatus = error.response.data.message;
        }
      });
  }, []);

  const currentItems = products.filter((item) => {
    return item.category == selectedCategory;
  });

  /* * * Event Handlers * * */

  // Toggle open/close Sidebar
  const handleOnToggle = () => {
    setIsOpen((item) => !item);
  };

  /* If product is available, increment its quantity in cart by 1
  otherwise add it to cart if does not exist and initialize its quantity to 1 */
  const handleAddItemToCart = (productId) => {
    let copyCart = [...shoppingCart];
    let found = false;
    copyCart.map((item, index) => {
      if (item.itemId === productId) {
        copyCart[index].quantity = copyCart[index].quantity + 1;
        found = true;
      }
    });
    if (!found) {
      copyCart.push({ itemId: productId, quantity: 1 });
    }
    setShoppingCart(copyCart);
  };

  /* If product already exists in 'shoppingCart,' decrease its quantity by 1
  If its quantity becomes 0, remove the product from cart */
  const handleRemoveItemFromCart = (productId) => {
    let copyCart = [...shoppingCart];
    copyCart.map((item, index) => {
      if (item.itemId === productId) {
        copyCart[index].quantity = copyCart[index].quantity - 1;
        if (copyCart[index].quantity == 0) {
          copyCart.splice(index, 1);
        }
      }
    });
    setShoppingCart(copyCart);
  };

  // Updates 'checkoutForm' with new value from correct input(s)
  const handleOnCheckoutFormChange = (name, value) => {
    let copy = {};
    if (name === "name") {
      copy = { ...checkoutForm, name: value };
    } else {
      copy = { ...checkoutForm, email: value };
    }
    setCheckoutForm(copy);
  };

  // Submits user order to API using 'POST' request
  const handleOnSubmitCheckoutForm = (checkoutForm, shoppingCart) => {
    axios
      .post("https://codepath-store-api.herokuapp.com/store", {
        user: checkoutForm,
        shoppingCart: shoppingCart,
      })
      .then((response) => {
        setReceipt(response.data.purchase.receipt.lines);
        setShoppingCart([]);
        setCheckoutForm({ email: "", name: "" });
        setError("Success!");
      })
      .catch((error) => {
        setReceipt([error.response.data.error.message]);
        setError("Error");
      });
  };

  // Sets value of search for filtering
  const handleOnSearchBarChange = (value) => {
    setSearchBar(value);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <div className="top">
            <Navbar />
          </div>

          <div className="left">
            <Sidebar
              isOpen={isOpen}
              shoppingCart={shoppingCart}
              products={products}
              checkoutForm={checkoutForm}
              receipt={receipt}
              error={error}
              handleOnCheckoutFormChange={handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
              handleOnToggle={handleOnToggle}
            />
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="homepage">
                    <Home
                      products={
                        selectedCategory == "All Categories"
                          ? products
                          : currentItems
                      }
                      selectedCategory={selectedCategory}
                      handleAddItemToCart={handleAddItemToCart}
                      handleRemoveItemFromCart={handleRemoveItemFromCart}
                      setSelectedCategory={setSelectedCategory}
                      handleOnSearchBarChange={handleOnSearchBarChange}
                      categories={categories}
                      shoppingCart={shoppingCart}
                      setIsFetching={setIsFetching}
                      searchBar={searchBar}
                      setSearchBar={setSearchBar}
                    />
                  </div>

                  <div className="about-us" id="about-us">
                    <h3>ABOUT US</h3>
                    <div className="about-us-wrapper">
                      <div className="summary">
                        <p className="summary-text">
                          The codepath student store offers great products at
                          great prices from a great team and for a great cause.
                        </p>
                        <p className="summary-text">
                          We've searched far and wide for items that perk the
                          interests of even the most eccentric students and
                          decided to offer them all here in one place.
                        </p>
                        <p className="summary-text">
                          All proceeds go towards bringing high quality CS
                          education to college students around the country.
                        </p>
                      </div>

                      <div className="about-image">
                        <img src="" className="about-logo"></img>
                      </div>
                    </div>
                  </div>

                  <div className="contact-us" id="contact-us">
                    <h3>CONTACT US</h3>
                    <div className="contact-us-wrapper">
                      <p>Phone Number: (123) 456-7890</p>
                      <p>Email: test@codepath.org</p>
                      <p>Address: 123 Fake Address, San Francisco, CA</p>
                    </div>
                  </div>

                  <footer className="footer">
                    <div className="footer-wrapper">
                      <h3>FOOTER INFO</h3>
                    </div>
                  </footer>
                </>
              }
            />

            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  isFetching={isFetching}
                  setIsFetching={setIsFetching}
                  setError={setError}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
