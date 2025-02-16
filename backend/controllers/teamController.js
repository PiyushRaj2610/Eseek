const Team = require("../models/team");
const User = require("../models/user");

exports.createTeam = async (req, res) => {
  try {
    const { teamName, lookingFor, achievements, games, experience } = req.body;
    const createdBy = req.user.userId;

    const existingTeam = await Team.findOne({ teamName });
    if (existingTeam){ 
      return res.status(400).json({ 
      error: "Team name already exists" 
    })
  };

    const newTeam = new Team({ 
      teamName, 
      lookingFor, 
      achievements, 
      games, 
      experience, 
      createdBy, 
      members: [createdBy] 
    });
    await newTeam.save();

    await User.findByIdAndUpdate(createdBy, { $push: { teams: newTeam._id } });
    res.status(201).json({ 
      msg: "Team created successfully", 
      team: newTeam 
    });
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
};