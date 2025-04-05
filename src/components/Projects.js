import React from "react";
import { Container, Typography, Card, CardContent, Chip } from "@mui/material";

const projects = [
  {
    name: "Ryze Generative AI Platform",
    description: "Enterprise-grade GenAI platform with 30+ AI agents, secure RAG integration, and multimodal capabilities.",
    isPrivate: true
  },
  {
    name: "DevAssist AI – VS Code Extension",
    description: "AI-powered developer assistant for code generation, SonarQube suggestions, and GPT-4 integration inside IDE.",
    isPrivate: true
  }
];

function Projects() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      {projects.map((project, index) => (
        <Card key={index} style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>{project.name}</Typography>
            <Typography variant="body1">{project.description}</Typography>

            {project.isPrivate && (
              <Chip
                label="Private Project"
                color="warning"
                style={{ marginTop: "10px" }}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Projects;