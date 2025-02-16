const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    unique: true
  },
  lookingFor: {
    type: String,
  },
  achievements: {
    type: String,
  },
  games: {
    type: String,
    required: true
  },
  experience: {
    type: String
  },
  members: [{
   type: mongoose.Schema.Types.ObjectId,
   ref: "User" 
  }],
  createdBy:{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  joinRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]

}, {timestamps: true})

module.exports = mongoose.model("Team", teamSchema);
