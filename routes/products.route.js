const express = require("express");

const router = express.Router();
const products = require("../controllers/products.controller.js");

router.get("/products", products.getAll);
router.get("/products/:id", products.getOne);
router.post("/products", products.createProduct);
router.delete("/products/:id", products.deleteProduct);
router.put("/products", products.updateProduct);

module.exports = router;
