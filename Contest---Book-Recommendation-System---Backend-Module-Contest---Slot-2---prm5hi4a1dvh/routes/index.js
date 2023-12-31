const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/book', require('./bookRoutes'));

module.exports = router;
