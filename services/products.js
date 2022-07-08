const productsModel = require('../models/products');

const getAllService = async () => {
  const data = await productsModel.getAllProducts();
  return data;
};

const getProductByIdService = async (id) => {
  const product = await productsModel.getProductByIdModel(id);
  return product;
};

const createProductService = async ({ name }) => {
  const id = await productsModel.addProductModel({ name });
  return {
    id,
    name,
  };
};

const updateProductService = async (name, id) => {
  await productsModel.updateProductModel(name, id);
  return {
    id,
    name,
  };
};

const removeProductService = async (id) => {
  await productsModel.removeProductModel(id);
};

module.exports = {
  getAllService,
  getProductByIdService,
  createProductService,
  updateProductService,
  removeProductService,
};