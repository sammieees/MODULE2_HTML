import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    try {
      const res = await fetch("http://localhost/cv-api/getContacts.php");
      const data = await res.json();

      // ensure array para dili mo-crash ang .map
      setContacts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div>
      <h2>Saved Contacts</h2>

      {contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;