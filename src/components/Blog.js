import React from "react";
import { Container, Typography, Card, CardContent, Button, Grid } from "@mui/material";

const blogPosts = [ 
  {
    title: "Vector RAG vs. Graph RAG: Which AI Retrieval Model is Right for You?",
    description: "Explore key differences and use cases for implementing RAG in enterprise AI platforms.",
    link: "https://www.linkedin.com/pulse/vector-rag-vs-graph-choosing-right-approach-chetan-kerhalkar-h6rzc/?trackingId=SsZSwJAY697HsIlJHbtkiw%3D%3D",
    date: "March 19, 2025"
  },
 
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
          <Grid item xs={12} sm={6} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="body1" style={{ marginTop: "10px" }}>
                  {post.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={post.link}
                  target="_blank"
                  style={{ marginTop: "15px" }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;