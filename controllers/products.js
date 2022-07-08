const serviceProducts = require('../services/products');

const getAllController = async (req, res, next) => {
  try {
    const data = await serviceProducts.getAllService();
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const getProductByIdController = async (req, res, _next) => {
  const { id } = req.params;
  const data = await serviceProducts.getProductByIdService(id);
  if (!data || data.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(data);
};

const addNewProduct = async (req, res, _next) => { 
  try { 
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    if (name.length < 5) {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
    const newProduct = await serviceProducts.createProductService({ name });
    return res.status(201).json(newProduct);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const updateProductController = async (req, res, _next) => {
  try { 
    const { name } = req.body;
    const { id } = req.params;
    const data = await serviceProducts.getProductByIdService(id);
    if (!data || data.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
    }
    await serviceProducts.updateProductService({ name, id });
    res.status(200).json({ id, name });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const removeProductController = async (req, res, _next) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log(typeof id);
    const idExists = await serviceProducts.getProductByIdService(id);
    if (!idExists || idExists.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await serviceProducts.removeProductService(id);
    return res.status(204).end();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllController,
  getProductByIdController,
  addNewProduct,
  updateProductController,
  removeProductController,
};