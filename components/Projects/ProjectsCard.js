"use client";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

function ProjectCard(props) {
  const cardStyle = {
    background: "transparent",
    color: "var(--clr-txt)",
    boxShadow: "var(--shadow)",
    transition: "all 0.5s ease 0s",
    height: "470px", // Set a fixed height for the card
    padding: "10px",
    border: "3.5px solid #ccc", // Add gray border
    borderRadius: "8px", // Rounded corners
    overflow: "hidden",
  };

  const imageWrapperStyle = {
    position: "relative",
    width: "100%",
    height: "200px", // Set your desired height for the image
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const descriptionStyle = {
    textAlign: "justify",
    marginBottom: "1rem",
  };

  const primaryBtnStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#007bff",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    bottom: "10px", // Stick to the bottom of the card
    left: "10px", // Adjust horizontal position
  };

  const secondaryBtnStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#28a745",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    bottom: "10px", // Stick to the bottom of the card
    right: "10px", // Adjust horizontal position
  };

  const hoverStyle = {
    transform: "scale(1.05)",
    overflow: "hidden",
  };

  return (
    <div style={{ ...cardStyle, ...hoverStyle }}>
      <div style={imageWrapperStyle}>
        <Image
          src={props.imgPath}
          alt="card-img"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ padding: "1rem" }}>
        <h3 style={titleStyle}>{props.title}</h3>
        <p style={descriptionStyle}>{props.description}</p>
        <a href={props.ghLink} target="_blank" style={primaryBtnStyle}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </a>
        {!props.isBlog && props.demoLink && (
          <a href={props.demoLink} target="_blank" style={secondaryBtnStyle}>
            <CgWebsite /> &nbsp;
            {"Demo"}
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
