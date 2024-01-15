const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  grades: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grade",
    },
  ],
  // attendance: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Grade",
  //     date: {
  //       type: Date,
  //     },
  //     present: {
  //       type: Boolean,
  //     },
  //   },
  // ],

  // firstName: String (required)
  // lastName: String (required)
  // dateOfBirth: Date (required)
  // email: String (required, unique)
  // courses: Array of Course IDs
  // grades: Array of Grade Objects
  // attendance: Array of Attendance Objects
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
