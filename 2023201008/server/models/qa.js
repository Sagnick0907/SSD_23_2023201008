const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const QaSchema = new Schema({
  quesid: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    // default: Date.now,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
});

module.exports = qa = mongoose.model("qa", QaSchema);