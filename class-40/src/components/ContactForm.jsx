import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    group: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(values);
    setValues({
      name: "",
      email: "",
      group: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="group">Group:</label>
        <select
          id="group"
          name="group"
          value={values.group}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <br />
      <input type="submit" value="Create New Contact" />
    </form>
  );
};

export default ContactForm;
