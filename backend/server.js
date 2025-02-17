const express = require("express");
const connectDB = require("./config/db");
const teamRoutes = require("./routes/teamRoute");
const userRoutes = require("./routes/userRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/teams", teamRoutes);
app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Server running"));