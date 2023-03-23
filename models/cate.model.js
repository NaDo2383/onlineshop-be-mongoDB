const { default: mongoose } = require("mongoose");

const cateSchema = new mongoose.Schema(
  {
    cateName: { type: String },
  },
  { collection: "cate", timestamps: true }
);

const Cate = mongoose.model("cate", cateSchema);

module.exports = Cate;
