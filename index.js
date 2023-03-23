const port = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const catRouter = require("./routes/category.route.js");
const userRouter = require("./routes/user.route.js");
const productRouter = require("./routes/products.route.js");

app.use(cors());
app.use(express.json());

app.use("/api", catRouter);
app.use("/api", userRouter);
app.use("/api", productRouter);

mongoose
  .connect(process.env.MONGO_DB_STRING)
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err));

app.get("/api", (req, res) => {
  res.json({ message: "welcome Rest API" });
});

app.listen(port, () => console.log("server is running " + port));
