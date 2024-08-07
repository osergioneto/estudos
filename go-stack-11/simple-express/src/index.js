const express = require("express");
const { uuid, isUuid } = require("uuidv4");

const app = express();
app.use(express.json());
app.use(logRequests)

const projects = [];

function logRequests (req, res, next) {
  const { method, url } = req;
  console.log(`[${method}]: ${url}`);
  return next();
}

function validateProjectID (req, res, next) {
  const { id } = req.params;

  if (!isUuid(id)) {
    return res.status(400).json({ error: "Invalid project ID" });
  }

  return next();
}

app.get("/projects", (req, res) => {
  const { title } = req.query;
  const results = title 
    ? projects.filter(project => project.title.includes(title)) 
    : projects;

  return res.status(200).json(results);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };
  projects.push(projects);

  return res.status(201).json(project);
});

app.put("/projects/:id", validateProjectID, (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ message: "Project not found"});
  }

  const project = {
    id,
    title,
    owner
  };

  projects[projectIndex] = project;

  return res.status(200).json(project);
});

app.delete("/projects/:id", validateProjectID, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: "Project not found" });
  }

  projects.splice(projectIndex, 1);

  return res.status(204).send();
});

app.listen(4000 || process.env.PORT, () => {
  console.log(`Server runnning on port ${4000 || process.env.PORT} 🚀`);
});