const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.create = async (req, res) => {
  const {
    userName,
    firstName,
    lastName,
    age,
    address,
    isAdmin,
    email,
    favoriteProducts,
    mostViewProducts,
    password,
  } = req.body;

  if (
    !email ||
    !password ||
    !userName ||
    !firstName ||
    !lastName ||
    !age ||
    !address ||
    !favoriteProducts ||
    !mostViewProducts
  ) {
    res
      .status(500)
      .send({ status: false, message: "Medeelelee buren oruulna uu" });
    return;
  }
  const hashedPass = await bcrypt.hash(password, 10);
  if (hashedPass) {
    const newUser = new User({
      userName,
      firstName,
      lastName,
      age,
      address,
      isAdmin,
      email,
      favoriteProducts,
      mostViewProducts,
      password: hashedPass,
    });

    const result = await newUser.save();

    if (result) {
      res.status(200).send({
        status: true,
        message: "Amjilttai hadgalalgdlaa",
      });
      return;
    } else {
      res.status(500).send({
        status: false,
        message: "Hadgalahad aldaa garlaa",
      });
      return;
    }
  }
};

exports.login = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    res
      .status(500)
      .send({ status: false, message: "Medeellee buren oruulna uu" });
    return;
  }

  const user = await User.findOne({ userName });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ user: user }, process.env.TOKEN_KEY, {
      expiresIn: "3h",
    });

    res
      .status(200)
      .send({ status: true, data: user, message: "Succes", token });
    return;
  } else {
    res
      .status(400)
      .send({ status: false, message: "Hereglegchiin data oldsongui" });
    return;
  }
};

exports.getAll = async (req, res) => {
  const a = await User.find();
  console.log(a);
  res.json({ message: "Test", result: a });
};
