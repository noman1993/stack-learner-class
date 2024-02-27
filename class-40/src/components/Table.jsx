import React, { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      (filter === "All" || contact.group === filter) &&
      (searchTerm === "" ||
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div>
        Filter:
        <select value={filter} onChange={handleChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
