const User = require("../controllers/user.controller");

exports.create = async (req, res) => {
    console.log(req.body);
    const obj = req.body;
    const a = await User.create(obj);
    console.log(a);
    res.json({ message: "Success", result: a });
};

exports.getAll = async (req, res) => {
    const a = await User.find();
    console.log(a);
    res.json({ message: "Test", result: a });
};
