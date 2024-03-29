const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  reservations: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      startTime: {
        type: Date,
        required: true,
      },
      endTime: {
        type: Date,
        required: true,
      },
    },
  ],
  // name: String (required)
  // The name of the resource.
  // type: String (required)
  // The type or category of the resource (e.g., Study Room, Equipment, Lab).
  // capacity: Number (required)
  // The maximum capacity or limit for the resource.
  // isAvailable: Boolean (default: true)
  // Indicates whether the resource is currently available for reservation.
  // reservations: Array of Reservation Objects
  // Contains information about reservations made for the resource.
  //          -->studentId: ObjectId (required)
  //             The ID of the student making the reservation.
  //          -->startTime: Date (required)
  //             The start time of the reservation.
  //          -->endTime: Date (required)
  //             The end time of the reservation.
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
