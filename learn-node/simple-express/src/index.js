const express = require("express");

const app = express();

app.get("/projects", (req, res) => {
  console.log(req.body);
  return res.status(200).json([
    "Project 1",
    "Project 2",
    "Project 3",
  ]);
});

app.post("/projects", (req, res) => {
  console.log(req.body);
  return res.status(201).json([
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
  ]);
});

app.put("/projects/:id", (req, res) => {
  console.log(req.body);
  res.status(200)
  return res.status(200).json([
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 5",
  ]);
});

app.delete("/projects/:id", (req, res) => {
  console.log(req.body);
  return res.status(200).json([
    "Project 1",
    "Project 2",
    "Project 3",
  ])
});

app.listen(4000 || process.env.PORT, () => {
  console.log(`Server runnning on port ${4000 || process.env.PORT} 🚀`);
});