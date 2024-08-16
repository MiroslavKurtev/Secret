const express = require('express');
const userControlelr = require('../controllers/userController.js');

const router = express.Router();

router.post('/signup', userControlelr.signUp);
router.post('/login', userControlelr.login);

module.exports = router;
