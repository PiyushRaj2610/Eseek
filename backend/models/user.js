const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true
  },
  games: {
    type: String,
    required: true
  },
  achievements: {
    type: String
  },
  clips: {
    type: String
  },
  experience: {
    type: String
  },
  teams: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "team"
  }
})

model.exports = mongoose.model("User", userSchema);