
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactSlice';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 5px 0;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px;
  cursor: pointer;
`;

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addContact({ ...contact, id: Date.now() }));
    setContact({ name: '', email: '', phone: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" value={contact.name} onChange={handleChange} placeholder="Name" />
      <Input name="email" value={contact.email} onChange={handleChange} placeholder="Email" />
      <Input name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;
