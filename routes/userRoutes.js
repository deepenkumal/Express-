const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

router.get('/register',userControllers.getRegisterUser);
router.post('/register',userControllers.postRegisterUser);
module.exports = router;