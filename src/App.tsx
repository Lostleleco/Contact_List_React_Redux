import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';


const App: React.FC = () => {
  return (
    <>

      <div>
        <h1>Contact List</h1>
        <ContactForm />
        <ContactList />
      </div>
    </>
  );
};

export default App;
