const express = require('express');
const router = express.Router();
const {userLogin, userSignup, userDashboard, userBlock, userDelete, userEdit} = 
require('../controllers/userController.js');

//Route for user signup
router.post('/signup', userSignup)
//Route for user login
router.post('/login', userLogin);
//Route for user edit
router.post('/edit/:username', userEdit);
//Route for user dashboard
router.get('/dashboard/:username', userDashboard);
//Route for user blocking
router.post('/block/:username', userBlock);
//Route for user deleting
router.get('/delete/:username', userDelete);

module.exports = router;