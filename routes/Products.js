const express = require('express')
const router=express.Router()
const productsController = require('../controllers/ProductsControllerDB');
const productValidator=require("../middlewares/ProductValidatorMW" ) ;

router.get('/', productsController.getAllProducts)

// router.get('/', productsController.getProducts)

router.get('/:id', productsController.getProductByID)

router.put('/:id' ,productsController.updateProduct)

router.post('/',productValidator ,productsController.addNewProduct)

router.delete('/:id', productsController.deleteProductById)
/* ***************** */


module.exports=router