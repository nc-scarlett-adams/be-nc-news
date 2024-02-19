const express = require("express");
const { getAllTopics } = require("./controllers/topic.controller");
const app = express();

app.get("/api/topics", getAllTopics);

app.get("/*", (req, res) => {
  res.status(404).send({ msg: "invalid endpoint" });
});

module.exports = app;
