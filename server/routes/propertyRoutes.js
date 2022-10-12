const { Router } = require('express');
const express = require('express');
const router = express.Router();
const {} = 
require('../controllers/userController.js');

router.get('/', (req,res)=>{
    res.send('Display all the properties');
})

module.exports = router;