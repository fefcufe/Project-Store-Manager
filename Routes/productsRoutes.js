const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();

router.get('/', productsController.getAllController);
router.get('/:id', productsController.getProductByIdController);

module.exports = router;