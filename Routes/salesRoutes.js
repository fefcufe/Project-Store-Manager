const express = require('express');
const salesController = require('../controllers/sales');

const router = express.Router();

router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getSaleByIdController);

module.exports = router;