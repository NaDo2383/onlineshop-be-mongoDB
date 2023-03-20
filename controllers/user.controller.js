const User = require("../models/user.model");

exports.create = async (req, res) => {
    console.log(req.body);
    const obj = req.body;
    const newUser = new User(obj);
    const a = await newUser.save();
    console.log(a);
    res.json({ message: "Success", result: a });
};

exports.getAll = async (req, res) => {
    const a = await User.find();
    console.log(a);
    res.json({ message: "Test", result: a });
};
