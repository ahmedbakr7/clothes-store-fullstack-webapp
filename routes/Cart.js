const express = require('express')
const router=express.Router()
const cartsController = require('../controllers/CartsControllerDB');
// const cartValidator=require("../middlewares/CartValidatorMW" ) ;

router.get('/', cartsController.getAllCarts)

// router.get('/', cartsController.getCarts)

router.get('/:id', cartsController.getCartByID)

router.put('/:id' ,cartsController.updateCart)

router.post('/'/* ,cartValidator */ ,cartsController.addNewCart)

router.delete('/:id', cartsController.deleteCartById)
/* ***************** */


module.exports=router