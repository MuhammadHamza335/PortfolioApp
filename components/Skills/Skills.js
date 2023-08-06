"use client";
import { Container } from "react-bootstrap";
// import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ReduxIcon from "../../public/Assests/redux.png";
import HTML from "../../public/Assests/html.png";
import jQuery from "../../public/Assests/jquery.png";
import JEST from "../../public/Assests/jest.png";
import Flutter from "../../public/Assests/flutter.png";
import VSCode from "../../public/Assests/vscode.png";
import ReactIcon from "../../public/Assests/react.png";
import NPMlogo from "../../public/Assests/npm.png";
import GitLogo from "../../public/Assests/git.png";
import GitHublogo from "../../public/Assests/github.png";
import WebPack from "../../public/Assests/webpack.png";
import CDT from "../../public/Assests/cdt.png";
import CSS from "../../public/Assests/css.png";
import BootStrap from "../../public/Assests/bootstrap.png";
import NextJS from "../../public/Assests/next.webp";
import JavaScript from "../../public/Assests/javascript.png";
import Sass from "../../public/Assests/sass.png";
import Image from "next/image";
import PostMan from "../../public/Assests/postman.png";

const Skills = () => {
  return (
    <Container fluid className="about-section">
      <h1 style={{ textAlign: "center" }}>
        <span className="primary-header">Tech Stack</span>
      </h1>
      <Container>
        {/* <section className="about" id="about" > */}
        <div className="about-skills">
          <h2 className="skill-title">Front-End</h2>
          <div className="skills">
            <div className="skill">
              <Image width={50} src={ReactIcon} alt="" />
              <p>React</p>
            </div>
            <div className="skill">
              <Image width={50} src={JavaScript} alt="" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <Image width={50} src={ReduxIcon} alt="" />
              <p>Redux</p>
            </div>
            <div className="skill">
              <Image width={50} src={HTML} alt="" />
              <p>HTML5</p>
            </div>
            <div className="skill">
              <Image width={50} src={CSS} alt="" />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <Image width={50} src={jQuery} alt="" />
              <p>jQuery</p>
            </div>
            <div className="skill">
              <Image width={50} src={Sass} alt="" />
              <p>SASS</p>
            </div>
            <div className="skill">
              <Image width={50} src={BootStrap} alt="" />
              <p>Bootstrap</p>
            </div>
            <div className="skill">
              <Image width={50} src={NextJS} alt="" />
              <p>Next.js</p>
            </div>
          </div>

          <h2 className="skill-title">Mobile</h2>
          <div className="skills">
            <div className="skill">
              <Image width={50} src={ReactIcon} alt="" />
              <p>React Native</p>
            </div>
            <div className="skill">
              <Image width={50} src={Flutter} alt="" />
              <p>Flutter</p>
            </div>
          </div>
          <h2 className="skill-title">Tools</h2>
          <div className="skills">
            <div className="skill">
              <Image width={50} src={GitLogo} alt="" />
              <p>Git</p>
            </div>
            <div className="skill">
              <Image width={50} src={GitHublogo} alt="" />
              <p>GitHub</p>
            </div>
            <div className="skill">
              <Image width={50} src={JEST} alt="" />
              <p>JEST</p>
            </div>
            <div className="skill">
              <Image width={50} src={CDT} alt="" />
              <p>Chrome Dev Tools</p>
            </div>
            <div className="skill">
              <Image width={50} src={VSCode} alt="" />
              <p>VS Code</p>
            </div>
            <div className="skill">
              <Image width={50} src={WebPack} alt="" />
              <p>Webpack</p>
            </div>
            <div className="skill">
              <Image width={50} src={PostMan} alt="" />
              <p>Postman</p>
            </div>
            <div className="skill">
              <Image width={50} src={NPMlogo} alt="" />
              <p>npm</p>
            </div>
          </div>
        </div>
        {/* </section> */}

        {/* <div data-aos="fade-up">
      <Techstack />
    </div>

    <h1 data-aos="fade-right">
      <span className="primary-header">Tools</span> I use
    </h1>
    <div data-aos="fade-up">
      <Toolstack data-aos="fade-up" />
    </div> */}

        {/* <Github /> */}
      </Container>
      {/* <ScrollToTop /> */}
    </Container>
  );
};

export default Skills;
