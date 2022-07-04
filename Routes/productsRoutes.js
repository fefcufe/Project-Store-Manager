const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();
// const middlewareProducts = require('../middlewares/middlewareName');

router.get('/', productsController.getAllController);
router.get('/:id', productsController.getProductByIdController);
// router.post('/', middlewareProducts, productsController.addNewProduct);
router.post('/', productsController.addNewProduct);
module.exports = router;