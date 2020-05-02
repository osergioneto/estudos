import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World xD"});
});

app.listen("3333", () => {
  console.log("Server listening on port 3333 🚀🚀🚀");
});