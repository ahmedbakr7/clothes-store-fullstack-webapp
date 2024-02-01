const express = require('express')
const router=express.Router()
const categoriesController = require('../controllers/CategoriesControllerDB');
// const categoryValidator=require("../middlewares/CategoryValidatorMW" ) ;

router.get('/', categoriesController.getAllCategories)

// router.get('/', categoriesController.getCategories)

router.get('/:id', categoriesController.getCategoryByID)

router.put('/:id' ,categoriesController.updateCategory)

router.post('/'/* ,categoryValidator */ ,categoriesController.addNewCategory)

router.delete('/:id', categoriesController.deleteCategoryById)
/* ***************** */


module.exports=router