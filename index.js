var express = require("express");
var app = express();

// Root URL (/)
app.get("/", function (req, res) {
  res.send("Sample Jira App");
});

module.exports = app;
