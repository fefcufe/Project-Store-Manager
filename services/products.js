const productsModel = require('../models/products');

const getAllService = async () => {
  const data = await productsModel.getAllProducts();
  return data;
};

const getProductByIdService = async (id) => {
  const [product] = await productsModel.getProductByIdModel(id);
  return product;
};

module.exports = {
  getAllService,
  getProductByIdService,
}