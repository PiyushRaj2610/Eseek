const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authCheck = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ 
      username, 
      email, 
      password: hashedPassword 
    });
    
    await newUser.save();

    res.status(201).json({ 
      message: "User registered successfully" 
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Error registering user", 
      error: error.message 
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user){
      return res.status(400).json({
        msg: "User not found"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(400).json({
        msg: "Invalid data"
      })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ 
      message: "Login successful", 
      token 
    });

  } catch (error) {
    res.status(500).json({ 
      message: "Error logging in", 
      error: error.message 
    });
  }
};

module.exports = { register, login };
