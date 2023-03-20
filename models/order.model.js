const { default: mongoose, SchemaType, Schema } = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        orderTotalPrice: Number,
        orderDetail: [
            {
                productId: String,
                orderedQuantity: number,
            },
        ],
        userId: String,
        totalPrice: Number,
        status: String,
        createdOn: {
            type: Date,
            default: Date.now,
        },
    },
    { collection: "order" }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
