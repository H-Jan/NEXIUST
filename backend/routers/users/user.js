const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users/user.js');

router.post('/createUser', userController.createUser);
router.get('/findAll', userController.allUsers);
router.get('/getUser', userController.getUser);
router.put('/updateUser', userController.updateUser)
router.delete('/deleteUser', userController.deleteUser);

module.exports = router;
