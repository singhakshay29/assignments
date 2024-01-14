const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  // studentId: ObjectId (required)
  // courseId: ObjectId (required)
  // grade: String (required, enum: ['A', 'B', 'C', 'D', 'F'])
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
