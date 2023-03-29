const Cate = require("../models/cate.model");

exports.getAll = async (req, res) => {
  try {
    const result = await Cate.find({});
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.getOne = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Cate.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const result = await Cate.create(req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.updateCategory = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Cate.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.deleteCategory = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Cate.deleteOne({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
