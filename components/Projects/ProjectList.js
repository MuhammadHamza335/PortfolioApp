"use client";
import { Container, Row, Col } from "react-bootstrap";
import ReadersClub from "../../public/Projects/ReadersClub.png";
import ProjectCard from "./ProjectsCard";

const projects = [
  {
    imgPath: ReadersClub,
    title: "Readers Club",
    description:
      "This is a fully functional Books store that uses Next.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database.",
    ghLink: "",
    demoLink: "https://www.readersclub.pk/",
  },
];
const ProjectList = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1 className="project-heading">
            <strong className="Fluorescent-Blue">Projects </strong>
          </h1>
          <p>Here are a few projects I've worked on recently.</p>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="project-card">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectList;
