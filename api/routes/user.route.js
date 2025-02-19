const router = require('express').Router();
const {signup} = require('../controllers/user.controller');

module.exports = router.post('/signup', signup);