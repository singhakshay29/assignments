const Course = require('../models/Course');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const { name, code } = req.body;
    if (!name || !code) {
      res.status(400).json({ message: 'Invalid request data' });
    }

    const newCourse = new Course({
      name,
      code,
    });
    await newCourse.save();
    res
      .status(200)
      .json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
