const serviceProducts = require('../services/products');

const getAllController = async (req, res, next) => {
  try {
    const data = await serviceProducts.getAllService();
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const getProductByIdController = async (req, res, next) => {
  const { id } = req.params;
  const data = await serviceProducts.getProductByIdService(id);
  if (!data || data.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(data);
}

const addNewProduct = async (req, res, next) => {
  const { name } = req.body;
  const newProduct = await serviceProducts.createProductService({ name });
  res.status(201).json(newProduct);
};

module.exports = {
  getAllController,
  getProductByIdController,
  addNewProduct,
}