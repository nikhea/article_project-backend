const express = require('express');
router = express.Router();
UserController = require('../controllers/User');

router.post('/singup', UserController.Singup);
router.post('/login', UserController.LogIn);

module.exports = router;
