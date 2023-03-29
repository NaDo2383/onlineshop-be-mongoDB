const { default: mongoose, Schema } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String },
    category: [{ type: Schema.Types.ObjectId, ref: "cate" }],
    stock: Number,
    desc: { type: String },
    sale: { Boolean },
    salePer: Number,
    thumbImage: { type: String },
    images: [String],
    price: Number,
    createdUserId: String,
  },
  { collection: "Product", timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
