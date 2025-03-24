import React from "react";
import { Container, Typography, Button } from "@mui/material";

function Home() {
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3">👋 Hi, I'm Chetan Kerhalkar!</Typography>
      <Typography variant="h5">Technology Director | AI/ML Specialist</Typography>
      <Typography>
        🚀 Expert in Azure AI, Generative AI, Microservices, ReactJS, and .NET.
      </Typography>
      <Button variant="contained" color="primary" href="/projects" style={{ marginTop: "20px" }}>
        View My Projects
      </Button>
    </Container>
  );
}

export default Home;
