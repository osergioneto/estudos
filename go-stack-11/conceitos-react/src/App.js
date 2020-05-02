import React, { Fragment, useState, useEffect } from 'react';
import Header from "./components/Header";
import { api } from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("repositories").then(({ data }) => {
      setProjects(data)
    })
  }, []);

  async function handleAddProject() {
    const response = await api.post("repositories", {
      title: `Novo projeto ${(new Date().getTime())}`,
      owner: "Sérgio Neto"
    })

    setProjects([...projects, response]);
  }

  return (
    <Fragment>
      <Header title="Homepage">
        <ul> 
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
      </Header>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </Fragment>
  );
}

export default App;
