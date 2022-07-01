const { storage } = require("../data/storage.js");
const { BadRequestError } = require("../utils/errors.js");

class Orders {
  static getOrders() {
    try {
      return storage.get("purchases").value();
    } catch (err) {
      throw new BadRequestError(err);
    }
  }

  static getOrderById(purchaseId) {
    try {
      return storage
        .get("purchases")
        .find((p) => p.id == purchaseId)
        .value();
    } catch (err) {
      throw new BadRequestError(err);
    }
  }
}

module.exports = Orders;
