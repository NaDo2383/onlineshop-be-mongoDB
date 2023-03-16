const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    age: Number,
    address: [String, String],
    isAdmin: { Boolean },
    email: { type: String, unique: true },
    favoriteProducs: [String],
    mostViewProducts: [String],
    password: { String },
    createdOn: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "user" }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
