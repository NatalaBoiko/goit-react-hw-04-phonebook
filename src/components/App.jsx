import { useState } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import './App.module.css';

export const App = () => {
  console.log('e');

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('renewed contacts');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const enterContacts = contacts.some(
      i =>
        (i.name === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    );
    enterContacts
      ? alert(`${name} or ${number} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

  // const changeFilterInput = e => {
  //   this.setState({ filter: e.target.value });
  // };

  // const findContacts = () => {
  //   const { filter, contacts } = this.state;
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      {/* <Filter
      filter={filter}
      changeFilterInput={this.changeFilterInput}
      /> */}
      <ContactList contacts={contacts} />
    </section>
  );
};

// contacts={this.findContacts()}
// deleteContact={deleteContact}
