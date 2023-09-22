import { Item, List, DeleteBtn } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact} from 'Redux/Operations';
 import {selectContacts, selectFilters } from 'Redux/selectors';
 import { useEffect } from 'react';

import { setContacts } from 'Redux/ContactsSlise';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  


  useEffect(() => {
   
   dispatch(setContacts(contacts));
   }, [dispatch, contacts]);

  const selectedContact = contacts.filter((contact) =>
   contact.name.toLowerCase().includes(filters)
 );
   console.log('con', selectContacts)

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  console.log("Selected Contacts:", selectedContact);
  return (
    <List>
      <ul>
        {selectedContact.map((contact) => {
          return (
            <Item key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <DeleteBtn onClick={() => handleDeleteContact(contact.id)}>
                Delete
              </DeleteBtn>
            </Item>
          );
        })}
      </ul>
    </List>
  );
};