const express = require('express')
const router=express.Router()
const resumesController = require('../controllers/ResumesControllerDB');
// const resumeVa1idator=require("../middlewares/resumeValidatorMW" ) ;

router.get('/', resumesController.getAllResumes)

// router.get('/', resumesController.getresumes)

router.get('/:id', resumesController.getResumeByID)

router.put('/:id' ,resumesController.updateResume)

router.post('/'/* ,resumeVa1idator */ ,resumesController.addNewResume)

router.delete('/:id', resumesController.deleteResumeById)
/* ***************** */

module.exports=router