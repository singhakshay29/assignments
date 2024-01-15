const Grade = require('../models/Grade');

exports.getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.find({});
    res.status(200).json(grades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getGradeById = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }
    res.status(200).json(grade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createGrade = async (req, res) => {
  try {
    const { studentId, courseId, grade } = req.body;

    // Validate request data
    if (!studentId || !courseId || !grade) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Create a new grade
    const newGrade = new Grade({ studentId, courseId, grade });
    await newGrade.save();

    res
      .status(201)
      .json({ message: 'Grade created successfully', grade: newGrade });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateGrade = async (req, res) => {
  try {
    const { studentId, courseId, grade } = req.body;

    // Validate request data
    if (!studentId || !courseId || !grade) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Update the grade
    const updatedGrade = await Grade.findByIdAndUpdate(
      req.params.id,
      { studentId, courseId, grade },
      { new: true }
    );

    if (!updatedGrade) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    res
      .status(200)
      .json({ message: 'Grade updated successfully', grade: updatedGrade });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteGrade = async (req, res) => {
  try {
    const deletedGrade = await Grade.findByIdAndDelete(req.params.id);

    if (!deletedGrade) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    res
      .status(200)
      .json({ message: 'Grade deleted successfully', grade: deletedGrade });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
