import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  margin-left: 10px;
  background-color: #007bff;
  border-radius: 5px;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #0056b3;
  }
`;

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactItemProps {
  contact: Contact;
  onRemove: () => void;
  onEdit: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onRemove, onEdit }) => {
  return (
    <ListItem>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <div>{contact.phone}</div>
      <Button onClick={onRemove}>Remover</Button>
      <Button onClick={onEdit}>Editar</Button>
    </ListItem>
  );
};

export default ContactItem;
