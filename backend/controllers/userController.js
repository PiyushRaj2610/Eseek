const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async (req, res) => {
  try {
    const { email, username, password, games, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ 
      email, 
      username, 
      password: hashedPassword, 
      games, 
      role });

    await newUser.save();
    res.status(201).json({ 
      message: "User registered successfully" 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};