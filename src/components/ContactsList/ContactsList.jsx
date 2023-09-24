import { Item, List, DeleteBtn } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {selectFilters, selectContacts} from 'Redux/selectors';
import { useEffect } from 'react';
import { fetchAllContacts, removeContact} from 'Redux/Operations';



export const ContactsList = () => {
   const contacts = useSelector(selectContacts);
const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);



 const selectedContact = contacts.filter((contact) =>
   contact.name.toLowerCase().includes(filters)
 );


  // const handleDeleteContact = (contactId) => {
  //    dispatch(removeContact(contactId));
  // };

  return (
    <List>
      <ul>
        {selectedContact.map((contact) => {
          return (
            <Item key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <DeleteBtn onClick={() => dispatch(removeContact(contact.id))}>
                Delete
              </DeleteBtn>
            </Item>
          );
        })}
      </ul>
    </List>
  );
};