const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, email, courses, grades } =
      req.body;

    // Validate request data
    if (!firstName || !lastName || !dateOfBirth || !email || !courses) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Create a new student
    const newStudent = new Student({
      firstName,
      lastName,
      dateOfBirth,
      email,
      courses,
      grades,
    });
    await newStudent.save();

    res
      .status(201)
      .json({ message: 'Student created successfully', student: newStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { name, age, email, courses } = req.body;

    // Validate request data
    if (!name || !age || !email || !courses) {
      return res.status(400).json({ message: 'Invalid request data' });
    }

    // Update the student
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, email, courses },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({
      message: 'Student updated successfully',
      student: updatedStudent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({
      message: 'Student deleted successfully',
      student: deletedStudent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
