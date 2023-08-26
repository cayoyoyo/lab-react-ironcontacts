import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(contact => !contacts.some(c => c.id === contact.id));
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setContacts(prevContacts => [...prevContacts, randomContact]);
    }
  };
  
  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };
  
  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  const removeContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };
  
  

  return (
   <div className="App">

   <h1>IronContacts</h1>
   <button onClick={addRandomContact}>Add Random Contact</button>
   <button onClick={sortByName}>Sort by Name</button>
   <button onClick={sortByPopularity}>Sort by Popularity</button>

    <table>
     <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>
    
        {contacts.map(contact => (
          <tr key={contact.id}>
          <td><img src={contact.pictureUrl} alt={contact.name} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar ? '🏆' : ''}</td>
          <td>{contact.wonEmmy ? '🏆' : ''}</td>
          <td><button onClick={() => removeContact(contact.id)}>Delete</button></td>
          </tr>
        ))}
     </table>
  </div>
  );
}

export default App;
