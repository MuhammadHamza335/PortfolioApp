"use client";

import { useState, useEffect } from "react";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const [formContainerWidth, setFormContainerWidth] = useState("100%");
  const [formContainerPadding, setFormContainerPadding] = useState("55px");

  useEffect(() => {
    const handleResize = () => {
      setFormContainerWidth(window.innerWidth < 768 ? "100%" : "65%");
      setFormContainerPadding(window.innerWidth < 768 ? "15px" : "55px");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div
      className="container mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid #f1eeee",
          borderRadius: "10px",
          padding: formContainerPadding,
          backgroundColor: "rgb(239, 236, 247)",
          width: formContainerWidth,
          marginBottom: "70px",
        }}
      >
        <div>
          <h3 style={{ textAlign: "center" }}>Let's Connect to discuss more</h3>
          <form onSubmit={onSubmit} style={{ marginTop: "30px" }}>
            <div className="mb-3">
              <label
                className="form-label"
                htmlFor="name"
                style={{ fontWeight: "bold" }}
              >
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="mb-3">
              <label
                className="form-label"
                htmlFor="email"
                style={{ fontWeight: "bold" }}
              >
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
                style={{ width: "100%" }}
              />
            </div>
            <div className="mb-3">
              <label
                className="form-label"
                htmlFor="message"
                style={{ fontWeight: "bold" }}
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                required
                style={{ width: "100%" }}
              />
            </div>
            <button
              className="btn btn-danger"
              type="submit"
              style={{
                marginTop: "20px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
