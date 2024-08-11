import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactSlice';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:50vh; 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px; 
  background-color: #f9f9f9; 
  padding: 20px;
  border-radius: 8px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: #1927e4;
  border: none;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px; 
  transition: background-color 0.3s;

  &:hover {
    background-color:  #3a3f8a;
  }
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
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input name="name" value={contact.name} onChange={handleChange} placeholder="Name" />
        <Input name="email" value={contact.email} onChange={handleChange} placeholder="Email" />
        <Input name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" />
        <Button type="submit">Adicione Aqui</Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
