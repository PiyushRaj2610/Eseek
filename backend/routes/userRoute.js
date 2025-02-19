const express = require("express");
const router = express.Router();
const { register } = require("../controllers/userController");

router.post("/signup", register);

module.exports = router;
