const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config");

dotenv.config();
connectDB;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/userRoute"));
app.use("/api/teams", require("./routes/teamRoute"));

app.listen(3000, () => {
  console.log("server running on port 3000")
});