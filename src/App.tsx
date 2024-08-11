import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>

      <div>
        <Header />
        <ContactForm />
        <ContactList />
      </div>
    </>
  );
};

export default App;
