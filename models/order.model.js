const { default: mongoose, SchemaType, Schema } = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderTotalPrice: Number,
    orderDetail: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        orderedQuantity: number,
        currentPrice: Number,
        salePercent: Number,
      },
    ],
    userId: String,
    totalPrice: Number,
    status: String,
  },
  { collection: "order", timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
