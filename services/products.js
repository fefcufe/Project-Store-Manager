// const Joi = require('joi');
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
  const  id  = await productsModel.addProductModel({ name });
  return {
    id,
    name
  };
};

module.exports = {
  getAllService,
  getProductByIdService,
  createProductService,
}