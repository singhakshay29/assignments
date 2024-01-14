const router = require('express').Router();

router.use('/student', require('./studentRoutes'));
router.use('/course', require('./courseRoutes'));
router.use('/grade', require('./gradeRoutes'));

module.exports = router;
