import React from 'react';
import { useSelector } from 'react-redux';

import ContactListItem from '../ContactListItem/ContactListItem';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactListItem 
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
