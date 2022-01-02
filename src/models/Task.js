const { Schema, model } = require("mongoose");

// schema
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: Boolean,
  },
  {
    timestamps: true,
  }
);

// model exports
module.exports = model("Task", taskSchema);
