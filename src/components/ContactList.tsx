import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { removeContact, editContact } from '../features/contacts/contactSlice';
import ContactItem from './contactItem';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contacts);

  const handleRemove = (id: number) => {
    dispatch(removeContact(id));
  };

  const handleEdit = (id: number) => {
    const newName = prompt('Enter new name');
    if (newName) {
      dispatch(editContact({ id, name: newName, email: '', phone: '' }));
    }
  };

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemove={() => handleRemove(contact.id)}
          onEdit={() => handleEdit(contact.id)}
        />
      ))}
    </List>
  );
};

export default ContactList;
