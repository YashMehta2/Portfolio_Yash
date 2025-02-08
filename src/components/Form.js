import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending data to an API.
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "10px" }}
      >
        <div>
          <span style={{ fontSize: "32px", textAlign: "center" }}>Contact</span>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <span style={{ marginLeft: "5px" }}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                background: "transparent",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            />
          </span>
        </div>
        <div style={{ marginTop: "8px" }}>
          <label htmlFor="email">Email: </label>
          <span style={{ marginLeft: "5px" }}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                background: "transparent",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            />
          </span>
        </div>
        <div style={{ marginTop: "8px" }}>
          <label htmlFor="message">Message:</label>
          <span style={{ marginLeft: "5px" }}>
            <input
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                background: "transparent",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            />
          </span>
        </div>
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "black",
          marginLeft: "25px",
          marginTop: "1%",
          color: "white",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
