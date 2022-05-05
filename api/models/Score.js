const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  name: {
    type: String,
    requird: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("scores", ScoreSchema);
