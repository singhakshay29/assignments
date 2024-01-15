const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

// Routes for grades
router.get('/grades', gradeController.getAllGrades);
// Add more routes for grades if needed

module.exports = router;
