import React from "react";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";

const projects = [
  {
    name: "Ryze Generative AI Platform",
    description: "Enterprise AI platform with 30+ AI agents.",
    github: "https://github.com/yourrepo"
  },
  {
    name: "DevAssist AI - VS Code Extension",
    description: "AI-powered code assistance and SonarQube integration.",
    github: "https://github.com/yourrepo"
  }
];

function Projects() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h4">Projects</Typography>
      {projects.map((project, index) => (
        <Card key={index} style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5">{project.name}</Typography>
            <Typography>{project.description}</Typography>
            <Button variant="contained" color="primary" href={project.github} target="_blank">
              View on GitHub
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Projects;
