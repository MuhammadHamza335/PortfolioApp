"use client";
import { Container, Row, Col } from "react-bootstrap";
import homeIcon from "../../public/homeicons.svg";
import TypeRole from "./TypeRole";
import Image from "next/image";
const Intro = () => {
  return (
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>{" "}
              I'M
            </h1>

            <h1 className="heading-name">
              <strong className="main-name"> Muhammad Hamza</strong>
            </h1>

            <div style={{ padding: 30 }} className="type">
              <TypeRole />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <Image
              src={homeIcon}
              alt="home pic"
              className="img-fluid"
              style={{ paddingTop: 50 }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Intro;
