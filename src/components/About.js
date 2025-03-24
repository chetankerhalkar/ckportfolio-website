import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

function About() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography>
        I am a **Technology Director** with 16+ years of experience specializing in AI, Cloud, and Software Development.
      </Typography>
      <Typography>
        **Expertise:** Azure AI, Generative AI, Microservices, ReactJS, .NET, Node.js.
      </Typography>

      <Divider style={{ margin: "20px 0" }} />

      {/* Key Skills Section */}
      <Typography variant="h5" gutterBottom>
        Key Skills
      </Typography>
      <List>
        <ListItem><ListItemText primary="Cloud Computing: Azure Cloud, Azure AI, Generative AI, AWS, Amazon Bedrock" /></ListItem>
        <ListItem><ListItemText primary="Generative AI Frameworks: Lang Graph RAG, Lang Chain, LLAMA Index, AutoGen" /></ListItem>
        <ListItem><ListItemText primary="Software Development: Microservices, ASP.NET Core, C#, Python, Node.js" /></ListItem>
        <ListItem><ListItemText primary="Data & Analytics: Machine Learning, Deep Learning, SQL Server, Cosmos DB" /></ListItem>
        <ListItem><ListItemText primary="Web & Mobile Development: Angular, ReactJS, Xamarin, Flutter" /></ListItem>
        <ListItem><ListItemText primary="DevOps: Azure DevOps, Jenkins, Terraform, GitHub Actions" /></ListItem>
        <ListItem><ListItemText primary="Gen AI/Machine Learning: GPT-4o, Mistral, Phi-3, Gemini, Microsoft Copilot, Microsoft Magnetic One, Bot Framework, Reinforcement Learning, Regression, TensorFlow, Azure Open AI, Azure Machine Learning, Azure Cognitive Services" /></ListItem>
        <ListItem><ListItemText primary="AI Techniques: Vector RAG, Graph RAG" /></ListItem>
        <ListItem><ListItemText primary="Project Management: Agile, Waterfall, Agile Framework" /></ListItem>
        <ListItem><ListItemText primary="Leadership: Managed teams of 50+ engineers and architects across diverse projects" /></ListItem>
      </List>

      <Divider style={{ margin: "20px 0" }} />

      {/* Professional Experience Section */}
      <Typography variant="h5" gutterBottom>
        Professional Experience
      </Typography>

      <Typography variant="h6">
        Technology Director, Leadership Sr. Manager
      </Typography>
      <Typography color="textSecondary">Fulcrum Digital, Chicago, IL | September 2017 – Present</Typography>
      <List>
        <ListItem><ListItemText primary="Directed cross-functional teams of 50+ members, including solution architects, technical leads, developers, and quality analysts, to deliver enterprise-grade solutions across industries." /></ListItem>
        <ListItem><ListItemText primary="Collaborated directly with the CTO and CEO to align technology initiatives with business objectives and innovation strategies." /></ListItem>
        <ListItem><ListItemText primary="Spearheaded the development of the Ryze Generative AI platform, enabling multi-modal capabilities and industry-specific solutions." /></ListItem>
        <ListItem><ListItemText primary="Played a Technology Director role in organizational transformation by introducing FulcrumOne low-code platforms, improving developer productivity by 40%." /></ListItem>
        <ListItem><ListItemText primary="Established and managed technical excellence within the organization by leading a panel of architects and driving best practices." /></ListItem>
        <ListItem><ListItemText primary="Developed cost optimization strategies for cloud platforms, achieving a 25% reduction in operational expenditure." /></ListItem>
        <ListItem><ListItemText primary="Implemented DevOps practices, leveraging CI/CD pipelines with Azure DevOps and GitHub Actions to enhance efficiency." /></ListItem>
      </List>

      <Typography variant="h6">
        Software Developer, Senior Software Developer, Technical Architect
      </Typography>
      <Typography color="textSecondary">Various Roles | May 2008 – September 2016</Typography>
      <List>
        <ListItem><ListItemText primary="Led architecture and development for key projects across Telecom, Insurance, and Higher Education domains." /></ListItem>
        <ListItem><ListItemText primary="Designed scalable solutions using .NET Core, Python, JavaScript, Node.js, Angular, and ReactJS, Vue.js, SQL Server, Cosmos DB, MongoDB, PostgreSQL." /></ListItem>
        <ListItem><ListItemText primary="Mentored junior developers, fostering a culture of technical excellence and continuous learning." /></ListItem>
        <ListItem><ListItemText primary="Delivered end-to-end ownership of project lifecycles, from inception to deployment, ensuring adherence to quality and timelines." /></ListItem>
      </List>

      <Divider style={{ margin: "20px 0" }} />

      {/* Education Section */}
      <Typography variant="h5" gutterBottom>
        Education & Certifications
      </Typography>
      <Typography variant="h6">Master’s in Computer Science</Typography>
      <Typography color="textSecondary">Pune University, Pune, India | 2007</Typography>

      <Typography variant="h6">Bachelor’s in Computer Applications</Typography>
      <Typography color="textSecondary">Pune University, Pune, India | 2005</Typography>

      <Typography variant="h6">Certifications</Typography>
      <List>
        <ListItem><ListItemText primary="Azure Solutions Architect" /></ListItem>
        <ListItem><ListItemText primary="Azure AI Engineer Associate" /></ListItem>
        <ListItem><ListItemText primary="FinOps Certified Practitioner" /></ListItem>
        <ListItem><ListItemText primary="Career Essentials in Generative AI by Microsoft and LinkedIn" /></ListItem>
      </List>
    </Container>
  );
}

export default About;
