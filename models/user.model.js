const { default: mongoose, Schema } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    age: Number,
    address: [String, String],
    isAdmin: { Boolean },
    email: { type: String, unique: true },
    favoriteProducs: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    mostViewProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    password: { String },
  },
  { collection: "user", timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
