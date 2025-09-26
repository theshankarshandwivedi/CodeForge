const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
    points: {
      type: Number,
      default: 100,
    },
    examples: [
      {
        input: String,
        output: String,
        explanation: String,
      },
    ],
    testcases: [
      {
        input: String,
        output: String,
        hidden: {
          type: Boolean,
          default: false, // false = visible sample testcase, true = hidden
        },
      },
    ],
    tags: [String], // e.g., "array", "dp"
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hackathon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hackathon",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Problem", problemSchema);
