const product = require("../models/productmodels");

module.exports.CreateProduct = async (req, res) => {
  try {
    const { name, brand, price } = req.body;
    if (!name || !brand || !price) throw new Error("fill the details");
    const products = await product.create({ name, brand, price });
    res.status(201).json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      msg: "products not created",
      error: error.message,
    });
  }
};

module.exports.getProductId = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not Valid");
    const products = await product.findById(id);
    if (!products) throw new Error("Id was not found");
    res.status(201).json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports.getAllProduct = async (req, res) => {
  try {
    const products = await product.find();
    if (!product) throw new Error("products was not found");
    res.status(201).json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports.getProductname = async (req, res) => {
  try {
    const { searchterm } = req.params;
    if (!searchterm) throw new Error("searchterm was not Valid");
    const products = await product.find({ name: searchterm });
    if (!product) throw new Error("Name was not found");
    res.status(201).json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports.getProductbrand = async (req, res) => {
  try {
    const { searchterm } = req.params;
    if (!searchterm) throw new Error("searchterm was not Valid");
    const products = await product.find({ brand: searchterm });
    if (!products) throw new Error("brand was not found");
    res.status(201).json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports.getProductprice = async (req, res) => {
  try {
    const { searchterm } = req.params;
    if (!searchterm) throw new Error("searchterm was not Valid");
    const products = await product.find({ price: searchterm });
    if (!products) throw new Error("price was not found");
    res.status(201).json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports.UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not Valid");
    const existIngproduct = await product.findById(id);
    if (!existIngproduct) throw new Error("NO product exist");
    const products = await product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({
      products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports.DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id was not Valid");
    const products = await product.findByIdAndDelete(id);
    if (!products) throw new Error("id was not found");
    res.status(201).json({
      sucess: true,
      message: "product was deletes sucessfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports.searchProducts = async (req, res) => {
  try {
    const { name } = req.params;
    if (!name) throw new Error("name is not defined");
    const products = await product.find();
    const term = name;
    const gotProducts  =[]
    for (let i = 0; i < products.length; i++) {
      if (products[i].name.includes(term)) {
        gotProducts.push(products[i]);
      }
    }
    res.status(201).json({
      gotProducts
    })
  } catch (error) {}
};
