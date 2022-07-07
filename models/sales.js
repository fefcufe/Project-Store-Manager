const connection = require('./connection');

const getAllSalesModel = async () => {
  const query = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity 
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    ORDER BY sp.sale_id, sp.product_id;`;
  const [allSales] = await connection.execute(query);
  const data = allSales.map((item) => ({
    saleId: item.sale_id,
    date: item.date,
    productId: item.product_id,
    quantity: item.quantity,
  }));
  return data;
};

const getSaleByIdModel = async (id) => {
  const query = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity 
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
    ORDER BY sp.sale_id, sp.product_id;`;
  const [sale] = await connection.execute(query, [id]);
  const data = sale.map((item) => ({
    date: item.date,
    productId: item.product_id,
    quantity: item.quantity,
  }));
  return data;
};

module.exports = {
  getAllSalesModel,
  getSaleByIdModel,
};