import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { AppWrapper } from './App.styled';



export const App = () => {


  return (
    <AppWrapper>
      <ContactForm />
      <Filter />
      <ContactsList />
    </AppWrapper>
  );
};
