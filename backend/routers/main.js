const express = require('express');
const router = express.Router();
const userController = require('../controllers/main.js');

router.get('/user', userController.findAll);

module.exports = router;
