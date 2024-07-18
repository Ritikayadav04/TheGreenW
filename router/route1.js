const express = require('express');

const {signup, signin} = require('../controller/controller1')

const router = express. Router();

// router.route('/').get(home); 
// router.route('/about').get(about); 
router.route('/signin').get(signin);
router.route('/signup').get(signup); 
module.exports = router;