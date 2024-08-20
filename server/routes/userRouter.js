const express = require('express');
const userControlelr = require('../controllers/userController.js');
const { protect } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/signup', userControlelr.signUp);
router.post('/login', userControlelr.login);

router.patch('updateInfo', protect, userControlelr.updateUserInformation);

module.exports = router;
