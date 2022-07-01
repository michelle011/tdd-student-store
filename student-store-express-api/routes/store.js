const express = require("express");
const router = express.Router();
const Store = require("../models/store");

router.get("/", async (req, res, next) => {
  try {
    const products = await Store.getProducts();
    res.status(200).json({ products: products });
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Store.getProductById(req.params.productId);
    res.status(200).json({ product: product });
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  try {
    const { user, shoppingCart } = req.body;
    console.log(req.body);
    const purchase = Store.newPurchase({ shoppingCart, user });
    res.status(201).json({ purchase });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
