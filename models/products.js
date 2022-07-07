const connection = require('./connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [dataProducts] = await connection.execute(query);
  console.log(dataProducts);
  return dataProducts;
};

const getProductByIdModel = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [[data]] = await connection.execute(query, [id]);
  return data;
};

const addProductModel = async (data) => {
  const query = `INSERT INTO StoreManager.products (name)
  VALUES (?);
  `;
  const [{ insertId }] = await connection.execute(query, [data.name]);
  console.log(insertId);
  return insertId;
};

const updateProductModel = async ({ name, id }) => {
  const query = `UPDATE StoreManager.products 
    SET name = ?
    WHERE id = ?;`;
  await connection.execute(query, [name, id]);
};

module.exports = {
  getAllProducts,
  getProductByIdModel,
  addProductModel,
  updateProductModel,
};