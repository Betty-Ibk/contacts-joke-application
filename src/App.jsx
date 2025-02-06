
import React, { useState } from 'react';
import './App.css';
import Contact from './Contact';
import Joke from './joke';

// Import images
import catImage from './images/cat.jfif';
import dogImage from './images/dog.jfif';
import lionImage from './images/lion drummer.jfif';
import pumpkinImage from './images/cat-png-40358.png';

function App() {
  // State for managing my contacts
  let [contacts, setContacts] = useState([
    {
      id: 1,
      img: catImage,
      name: "Mr. Whiskerson",
      phone: "(212) 555-2344",
      email: "mr.whiskaz@catnap.meow",
    },
    {
      id: 2,
      img: dogImage,
      name: "Mr. Fluffykins",
      phone: "(212) 555-23456",
      email: "mr.fluff@dog.meow",
    },
    {
      id: 3,
      img: lionImage,
      name: "Mr. Felix",
      phone: "(212) 555-4564",
      email: "kingdrummer@hotmail.meow",
    },
    {
      id: 4,
      img: pumpkinImage,
      name: "Pumpkin",
      phone: "(212) 7894 6784",
      email: "pumpkin@scrimba.meow",
    },
  ]);

  // State for managing funny jokes
  let [jokes, setJokes] = useState([
    {
      id: 1,
      setup: "I got my daughter a fridge for her birthday",
      punchline: "I can't wait to see her face light up when she opens it.",
    },
    {
      id: 2,
      setup: "How did the hacker escape the police?",
      punchline: "He just ransomware!",
    },
    {
      id: 3,
      setup: "Why don't pirates travel on mountain roads?",
      punchline: "Scurvy",
    },
    {
      id: 4,
      setup: "What's the best thing about Switzerland?",
      punchline: "I don't know, but the flag is a big plus!",
    },
  ]);

  // Function to add a new contact
  let addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
  };

  // Function to add a new joke
  let addJoke = (newJoke) => {
    setJokes([...jokes, { ...newJoke, id: jokes.length + 1 }]);
  };

  // Function to delete a contact
  let deleteContact = (id) => {
    let updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  // Function to delete a joke
  let deleteJoke = (id) => {
    let updatedJokes = jokes.filter((joke) => joke.id !== id);
    setJokes(updatedJokes);
  };

  return (
    <div className="App">
      <header>
        <h1>Contact & Jokes App</h1>
      </header>

      <main>
        {/* Add a new contact (form) */}
        <section className="form-section">
          <h2>Add New Contact</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newContact = {
                img: e.target.img.value,
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
              };
              addContact(newContact);
              e.target.reset();
            }}
          >
            <input type="text" name="img" placeholder="Image URL" required />
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="phone" placeholder="Phone" required />
            <input type="email" name="email" placeholder="Email" required />
            <button type="submit">Add Contact</button>
          </form>
        </section>

        {/* Add a new joke */}
        <section className="form-section">
          <h2>Add New Joke</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newJoke = {
                setup: e.target.setup.value,
                punchline: e.target.punchline.value,
              };
              addJoke(newJoke);
              e.target.reset();
            }}
          >
            <input type="text" name="setup" placeholder="Setup" required />
            <input type="text" name="punchline" placeholder="Punchline" required />
            <button type="submit">Add Joke</button>
          </form>
        </section>

        {/* Contacts Section */}
        <section>
          <h2>Contacts</h2>
          <div className="contacts">
            {contacts.map((contact) => (
              <Contact
                key={contact.id}
                img={contact.img}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                onDelete={() => deleteContact(contact.id)}
              />
            ))}
          </div>
        </section>

        {/* Jokes Section */}
        <section>
          <h2>Jokes</h2>
          <div className="jokes">
            {jokes.map((joke) => (
              <Joke
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
                onDelete={() => deleteJoke(joke.id)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;