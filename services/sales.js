const salesModel = require('../models/sales');

const getAllSalesService = async () => {
  const data = await salesModel.getAllSalesModel();
  return data;
};

const getSaleByIdService = async (id) => {
  const sale = await salesModel.getSaleByIdModel(id);
  return sale;
};

module.exports = {
  getAllSalesService,
  getSaleByIdService,
};