const express = require("express");
const connectDB = require("./config");
const teamRoutes = require("./routes/teamRoute");
const userRoutes = require("./routes/userRoute");
const cors = require("cors");
require("dotenv").config();

const app = express();
console.log("connect db")
connectDB();
console.log("dn connected")

app.use(express.json());
app.use(cors());

app.use("/api/teams", teamRoutes);
app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running")}
);