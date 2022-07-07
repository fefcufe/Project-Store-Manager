const salesService = require('../services/sales');

const getAllSales = async (_req, res, next) => {
  try {
    const response = await salesService.getAllSalesService();
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
};

const getSaleByIdController = async (req, res, _next) => {
  const { id } = req.params;
  const data = await salesService.getSaleByIdService(id);
  if (!data || data.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  res.status(200).json(data);
};

module.exports = {
  getAllSales,
  getSaleByIdController,
};