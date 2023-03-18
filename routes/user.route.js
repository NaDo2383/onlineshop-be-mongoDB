const { Router } = require("express");
const user = require("../controllers/user.controller.js");

const route = Router();

route.get("/user", user.getAll);
route.post("/user", user.create);

module.exports = route;
