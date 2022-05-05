const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("../api/dbconfig/config");
const Score = require("../api/models/Score");
const server = express();
server.use(cors());
server.use(express.json());

// Connect Mongodb
connectDB();

// Init Middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json());

const usersRoutes = require("./routes/usersRoutes");

server.use("/", usersRoutes);

server.get("/", (req, res) => res.send("Welcome all Quizzards!"));

server.post("/scoreGet", async (req, res) => {
  console.log(req.body);
  let NewScore = new Score({
    name: req.body.name,
    score: req.body.score,
  });
  await NewScore.save();
  return res.status(200).json({
    message: "Score has been Saved",
  });
});

server.get("/AllScores", async (req, res) => {
  Score.find({}).then((response) => {
    console.log(response);
    return res.status(200).json(response);
  });
});

module.exports = server;
