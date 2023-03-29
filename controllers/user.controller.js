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
    !address
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
  const { user } = req;

  if (!user) {
    res.status(500).send({
      status: false,
      message: "Token-tei hereglegch bish bna",
    });
    return;
  }

  const result = await User.find({})
    .populate("favoriteProducs")
    .populate("mostViewProducts");

  if (result) {
    res.status(200).send({
      status: true,
      result,
    });
    return;
  } else {
    res.status(500).send({
      status: false,
      message: "Baazad hereglegch bhgui bna",
    });
    return;
  }
};

exports.deleteUser = async (req, res) => {
  const { _id } = req.params;
  const { user } = req;

  if (!user) {
    res.status(500).send({
      status: false,
      message: "Token-tei hereglegch bish bna",
    });
    return;
  }

  try {
    const result = await User.deleteOne({ _id });
    res.status(200).send({ status: true, message: "amjilttai ustlaa", result });
    return;
  } catch (err) {
    res.status(400).send({ status: false, message: err });
    return;
  }
};

exports.updateUser = async (req, res) => {
  const { _id } = req.params;
  const { user } = req;

  if (!user) {
    res.status(500).send({
      status: false,
      message: "Token-tei hereglegch bish bna",
    });
    return;
  }

  try {
    const result = await User.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.json({ status: true, result });
    return;
  } catch (err) {
    res.json({ status: false, message: err });
    return;
  }
};
