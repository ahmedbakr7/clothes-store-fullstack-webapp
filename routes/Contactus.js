const express = require('express')
const router=express.Router()
const contactusController = require('../controllers/ContactusControllerDB');
// const productValidator=require("../middlewares/ProductValidatorMW" ) ;

router.get('/', contactusController.getAllContactus)

// router.get('/', contactusController.getContactus)

router.get('/:id', contactusController.getContactusByID)

router.put('/:id' ,contactusController.updateContactus)

router.post('/'/* ,productValidator */ ,contactusController.addNewContactus)

router.delete('/:id', contactusController.deleteContactusById)
/* ***************** */


module.exports=router