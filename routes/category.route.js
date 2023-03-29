const express = require("express");

const router = express.Router();
const cate = require("../controllers/cate.controller.js");

router.get("/cate", cate.getAll);
router.post("/cate", cate.createCategory);
router.delete("/cate/:id", cate.deleteCategory);
router.put("/cate", cate.updateCategory);

module.exports = router;
