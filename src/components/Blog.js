import React from "react";
import { Container, Typography, Card, CardContent, Button, Grid, Stack } from "@mui/material";

const blogPosts = [
  {
    title: "Vector RAG vs. Graph RAG: Which AI Retrieval Model is Right for You?",
    description: "Explore key differences and use cases for implementing RAG in enterprise AI platforms.",
    link: "https://www.linkedin.com/pulse/vector-rag-vs-graph-choosing-right-approach-chetan-kerhalkar-h6rzc",
    mediumlink: "https://medium.com/@chetankerhalkar/vector-rag-vs-graph-rag-choosing-the-right-approach-b8ba1d3f44d9",
    date: "March 19, 2025"
  },
  {
    title: "Unlocking the Power of MCP (Model Context Protocol) in Generative AI",
    description: "A deep dive into how MCP enables more contextual and secure Gen AI app development.",
    link: "https://www.linkedin.com/pulse/unlocking-power-mcp-model-context-protocol-generative-kerhalkar-imeqc",
    mediumlink: "https://medium.com/@chetankerhalkar/unlocking-the-power-of-mcp-model-context-protocol-in-generative-ai-31a02705be9f",
    date: "March 25, 2025"
  },
  {
    title: "Unlocking the Future of Development: VIBE Coding Revolution",
    description: "Introducing VIBE Coding — an intuitive way to build modern apps with AI-enhanced context.",
    link: "https://www.linkedin.com/pulse/unlocking-future-development-vibe-coding-revolution-chetan-kerhalkar-qu1dc",
    mediumlink: "https://medium.com/@chetankerhalkar/unlocking-the-future-of-development-vibe-coding-revolution-1fc0b6373df9",
    date: "April 1, 2025"
  }
];

function Blog() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Blog
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Explore my thoughts on Generative AI, Cloud Architecture, Developer Productivity, and more.
      </Typography>

      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} style={{ minHeight: "300px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="body1" style={{ marginTop: "10px" }}>
                  {post.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Stack direction="row" spacing={2} justifyContent="flex-start">
                  <Button
                    variant="outlined"
                    color="primary"
                    href={post.link}
                    target="_blank"
                  >
                    Read on LinkedIn
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    href={post.mediumlink}
                    target="_blank"
                  >
                    Read on Medium
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;
