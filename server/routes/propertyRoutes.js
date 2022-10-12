const express = require('express');
const router = express.Router();
const {showProperties, addProperty, updateProperty, deleteProperty} = require('../controllers/propertyController.js');

//Show all the properties
router.get('/', showProperties)

//Add new property
router.post('/add', addProperty)

//Update the property
router.put('/update/:id', updateProperty)

//Delete a property
router.delete('/delete/:id', deleteProperty)

module.exports = router;