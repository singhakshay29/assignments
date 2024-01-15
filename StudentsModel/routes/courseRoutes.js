const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes for courses
router.get('/courses', courseController.getAllCourses);
router.post('/create', courseController.createCourse);

module.exports = router;
