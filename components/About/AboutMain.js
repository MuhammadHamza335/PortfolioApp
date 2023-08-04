"use client";
import { Container, Row, Col } from "react-bootstrap";
import LaptopSkills from "../../public/LaptopSkills.png";
import Image from "next/image";
import { Email, Github, Instagram, linkedin } from "../../utils/urls";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const AboutMain = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a{" "}
              <i className="primary-header">
                Experienced Frontend Developer
              </i>{" "}
              who loves solving problems and building Websites.
              {/* <br />
            <br /> */}
              I am passionate about{" "}
              <i className="primary-header">Optimized Frontend</i> and love to
              learn new things.
              <br />
              <br />I thrive on turning complex ideas into elegant,
              user-friendly interfaces. My love for clean code and attention to
              detail ensure that every line I write not only functions
              flawlessly but also adds beauty to the overall design. Constantly
              seeking ways to level up my skills, I stay on top of the latest
              industry trends and best practices. When I'm not crafting
              pixel-perfect UIs, you can find me exploring new hiking trails,
              experimenting with cooking recipes, or simply getting lost in the
              world of fantasy novels. Let's collaborate and build something
              amazing together!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Image
              src={LaptopSkills}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href={Github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={Email}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={Instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutMain;
