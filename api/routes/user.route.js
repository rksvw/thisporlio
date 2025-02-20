const router = require('express').Router();
const {signup} = require('../controllers/user.controller');

module.exports = router.post('/signup', signup);
// module.exports = router.get('/about', rAbuot);
// module.exports = router.get('/', rHome);
// module.exports = router.post('/signin', signin)