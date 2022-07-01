const { storage } = require("../data/storage.js");
const { BadRequestError } = require("../utils/errors.js");

class Store {
  static getProducts() {
    try {
      return storage.get("products").value();
    } catch (err) {
      throw new BadRequestError(err);
    }
  }

  static getProductById(productId) {
    try {
      return storage
        .get("products")
        .find((p) => p.id == productId)
        .value();
    } catch (err) {
      throw new BadRequestError(err);
    }
  }

  static newPurchase({ shoppingCart, user }) {
    if (!user || !shoppingCart || shoppingCart.length == 0) {
      throw new BadRequestError("No shopping cart or user field");
    }

    if (!user.name || !user.email) {
      throw new BadRequestError(
        "User info not complete, missing name or email"
      );
    }

    // Ensure every purchase has itemId and quantity field
    // Also check for duplicate items in shopping cart
    let seen = [];
    let total = 0;
    let receipt = [];

    try {
      shoppingCart.map((item) => {
        if (!item.itemId || !item.quantity) {
          throw new BadRequestError(
            "One of the items does not have item id or quantity field"
          );
        }

        if (!seen.includes(item.itemId)) {
          seen.push(item.itemId);
        } else {
          throw new BadRequestError("Duplicate item in shopping cart");
        }
        let currAmount =
          Store.getProductById(item.itemId).price * item.quantity;
        receipt.push(
          `${item.quantity} total ${
            Store.getProductById(item.itemId).name
          } purchased at a cost of $${Store.getProductById(
            item.itemId
          ).price.toFixed(2)} for a total cost of $${currAmount.toFixed(2)}`
        );
        total += currAmount;
      });
    } catch (err) {
      throw err;
    }
    receipt.push(`Before taxes, the subtotal was $${total.toFixed(2)}`);
    total *= 1.0875;
    receipt.push(
      `After taxes and fees were applied, the total comes out to $${total.toFixed(
        2
      )}`
    );

    const time = new Date().toString();
    const toAdd = {
      id: storage.get("purchases").value().length + 1,
      name: user.name,
      email: user.email,
      order: shoppingCart,
      total: "$" + total.toFixed(2),
      createdAt: time,
      receipt: receipt,
    };

    storage.get("purchases").push(toAdd).write();
    return toAdd;
  }
}

module.exports = Store;
