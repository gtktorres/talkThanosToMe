const mongoose = require("mongoose");

const LineSchema = new mongoose.Schema({
  sentiment: {
    type: String,
    required: true
  },
  line: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Line", LineSchema);
