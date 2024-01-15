const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  // name: String (required)
  // description: String
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
