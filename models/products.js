const connection = require('../models/connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [dataProducts] = await connection.execute(query);
  return dataProducts;
}

const getProductByIdModel = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [data] = await connection.execute(query, [id]);
  return data;
}

module.exports = {
  getAllProducts,
  getProductByIdModel,
}