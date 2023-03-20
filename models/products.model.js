const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        productName: { type: String },
        category: [number],
        stock: Number,
        desc: { type: String },
        sale: { Boolean },
        salePer: number,
        createdOn: {
            type: Date,
            default: Date.now,
        },
        thumbImage: { type: String },
        images: [String],
        price: number,
        createdUserId: string,
    },
    { collection: "product" }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
