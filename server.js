const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");
const roomrouter = require("./routers/roomrouter");
const messagerouter = require("./routers/messagerouter");
const server = require("./chat-server")
const app = express();

// middleware
app.use(express.json({ extended: false }));
app.use(cors());

// routers

app.use(roomrouter);
app.use(messagerouter);

// port
const PORT = process.env.PORT || 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/chat-app")
  .then(() => console.log("database connection established"))
  .catch(() => console.log("database connection error" + err));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

app.post("/api/get-otp", async (req, res) => {
  const otp = getRandomInt(1000, 9999);
  const mobile = req.body.mobile;

  return res.status(200).json({ otp: otp, mobile: mobile });
});

app.post("/api/user-login", async (req, res) => {
  try {
    const user = await User.findOne({ mobile: req.body.mobile });
    if (user)
      return res
        .status(200)
        .json({ userID: user.id, message: "Welcome back :)" });
    const newUser = await User.create({ mobile: req.body.mobile });
    newUser.save();
    return res
      .status(200)
      .json({ userID: newUser.id, message: "User created successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error while creating user" + err });
  }
});



app.listen(PORT, () => console.log("express server listening on port " + PORT));
server.listen(5500, () => console.log("express server listening on 5500"));