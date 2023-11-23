import React from "react";
import { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <img
        src="https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img-contanct"
        className="contact-img"
      />
      <div className="contact-form">
        <h1 className="contact-h1">問い合わせ</h1>{" "}
        <form >
          <label htmlFor="name">名前:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">メール:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">メッセージ:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          
        </form>
        <button onClick={handleSubmit} className="contact-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
