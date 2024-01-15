const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  grade: {
    type: String,
    required: true,
    enum: ["A", "B", "C", "D", "F"],
  },
  // studentId: ObjectId (required)
  // courseId: ObjectId (required)
  // grade: String (required, enum: ['A', 'B', 'C', 'D', 'F'])
});

const Grade = mongoose.model("Grade", gradeSchema);

module.exports = Grade;
