const Resource = require("../models/resourceModel");
const Student = require("../models/studentModel");

exports.reserveResource = async (req, res) => {
  try {
    const { resourceId, studentId, startTime, endTime } = req.body;

    // Check resource availability by fetching it from the database
    const resource = await Resource.findById(resourceId);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    // Check student existence by fetching it from the database
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // TODO: Check if the resource is available for the specified time range
    // Implement logic to check if the resource is available based on the existing reservations

    // Create reservation by updating resource details and save it
    const reservation = {
      studentId: studentId,
      startTime: startTime,
      endTime: endTime,
    };

    resource.reservations.push(reservation);
    await resource.save();

    // Send a success response with the reservation details
    res
      .status(200)
      .json({
        message: "Resource reserved successfully",
        reservation: resource.reservations,
      });
    // TODO: Extract necessary details from the request body (resourceId, studentId, startTime, endTime)
    // TODO: Check resource availability by fetching it from the database
    // TODO: Check student existence by fetching it from the database
    // TODO: Create reservation by updating resource details and save it
    // TODO: Send a success response with the reservation details
    // res.status(200).json({ message: 'Resource reserved successfully', reservation: resource.reservations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
