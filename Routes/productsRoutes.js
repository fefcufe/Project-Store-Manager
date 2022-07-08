const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();
const middlewareProducts = require('../middlewares/middlewareName');

router.get('/:id', productsController.getProductByIdController);
router.put('/:id', middlewareProducts, productsController.updateProductController);
router.delete('/:id', productsController.removeProductController);
router.get('/', productsController.getAllController);
// router.post('/', middlewareProducts, productsController.addNewProduct);
router.post('/', productsController.addNewProduct);

module.exports = router;