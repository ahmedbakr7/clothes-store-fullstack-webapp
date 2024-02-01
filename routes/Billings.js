const express = require('express')
const router=express.Router()
const billingsController = require('../controllers/BillingsControllerDB');
// const BillingVa1idator=require("../middlewares/BillingValidatorMW" ) ;


router.get('/', billingsController.getAllBillings)

// router.get('/', billingsController.getbillings)

router.get('/:id', billingsController.getBillingByID)

router.put('/:id' ,billingsController.updateBilling)

router.post('/'/* ,BillingVa1idator */ ,billingsController.addNewBilling)

router.delete('/:id', billingsController.deleteBillingById)
/* ***************** */

module.exports=router