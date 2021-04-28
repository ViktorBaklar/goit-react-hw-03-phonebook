import { Component } from "react"
import uniqueId from 'lodash/uniqueId';
import './App.css';
import Container from './components/UI/container'
import Section from './components/UI/Section'
import ContactForm from './components/contactForm'
import ContactList from './components/contactList'
import Filter from './components/filter'
// import Notification from './components/notification'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    // console.log(parsedContacts)
    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    const { contacts: nowContacts } = this.state;
    const { contacts: prevContacts } = prevState;
    if (nowContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nowContacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: uniqueId("prefix-"),
      name,
      number,
    }

    const { contacts } = this.state

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
  };

  filterHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const regExp = new RegExp(filter, 'gi');

    if (filter) {
      return contacts.filter(contact => regExp.test(contact.name));
    }

    return contacts;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App" >
        <Container>
          <Section title='Phonebook'>
            <ContactForm onSubmit={this.addContact} />
          </Section>
          <Section title='Contacts'>
            <Filter value={this.state.filter} onChange={this.filterHandler} />
            {/* {filteredContacts.length > 0 ? ( */}
            <ContactList items={filteredContacts}
              onDelete={this.deleteContact}>
            </ContactList>
            {/* // ) */}
            {/* //   : (<Notification message="No any contacts here"></Notification>)} */}
          </Section>
        </Container>

      </div>
    );
  }
}

export default App;
