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
   ref: "user" 
  }],
  createdBy:{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user", 
    required: true 
  },
  joinRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }]

})

model.exports = mongoose.model("User", teamSchema);