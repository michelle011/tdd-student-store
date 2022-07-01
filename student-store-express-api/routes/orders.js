const express = require("express");
const router = express.Router();
const Orders = require("../models/orders");

router.get("/", async (req, res, next) => {
  try {
    const orders = await Orders.getOrders();
    res.status(200).json({ orders: orders });
  } catch (err) {
    next(err);
  }
});

router.get("/:orderId", async (req, res, next) => {
  try {
    const order = await Orders.getOrderById(req.params.orderId);
    res.status(200).json({ order: order });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
