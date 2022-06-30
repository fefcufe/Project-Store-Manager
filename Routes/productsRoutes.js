const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();

router.get('/', productsController.getAllController);
router.get('/:id', productsController.getProductByIdController);
router.post('/', productsController.addNewProduct);

module.exports = router;