import React from "react";
import { Container, Typography, Button } from "@mui/material";

function Contact() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h4">Contact Me</Typography>
      <Typography>Email: chetankerhalkar@gmail.com</Typography>
      <Button variant="contained" color="primary" href="https://www.linkedin.com/in/chetan-kerhalkar-9a5a6856/" target="_blank">
        Connect on LinkedIn
      </Button>
    </Container>
  );
}

export default Contact;
