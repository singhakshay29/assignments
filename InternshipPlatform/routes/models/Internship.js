const mongoose = require("mongoose");
const Notification = require("../models/Notification");

const internshipSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  company: {
    type: String,
  },
  position: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  // studentId: MongoDB ObjectId referencing the student applying for the internship.
  // company: Name of the company providing the internship.
  // position: Internship position or role.
  // status: Current status of the internship (Pending, Approved, Rejected).
});

// Mongoose Hook for sending notifications on internship approval
internshipSchema.post("findOneAndUpdate", async function (doc, next) {
  try {
    const updatedInternship = doc._update;

    if (updatedInternship.status === "Approved") {
      // If the internship status is changed to 'Approved', send a notification
      const notificationMessage = `Congratulations! Your internship at ${updatedInternship.company} for the position of ${updatedInternship.position} has been approved.`;

      // Assuming you have a createNotification method in your Notification model
      await Notification.createNotification({
        studentId: updatedInternship.studentId,
        message: notificationMessage,
      });
    }

    next();
    // post('findOneAndUpdate'): Hook triggered after an internship is updated. It sends a notification when the internship status is changed to 'Approved'.
  } catch (error) {
    console.error("Error sending internship approval notification:", error);
    next(error);
  }
});

const Internship = mongoose.model("Internship", internshipSchema);

module.exports = Internship;
