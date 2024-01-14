const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // firstName: String (required)
  // lastName: String (required)
  // dateOfBirth: Date (required)
  // email: String (required, unique)
  // courses: Array of Course IDs
  // grades: Array of Grade Objects
  // attendance: Array of Attendance Objects
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
