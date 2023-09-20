import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { AppWrapper } from './App.styled';
import { useEffect} from 'react';
import { fetchContacts } from 'Redux/Operations';
import { useDispatch } from 'react-redux';


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppWrapper>
      <ContactForm />
      <Filter />
      <ContactsList />
    </AppWrapper>
  );
};
