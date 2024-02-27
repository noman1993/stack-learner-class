import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import Table from "./components/Table";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm addContact={addContact} />
      <Table contacts={contacts} />
    </div>
  );
};

export default App;
