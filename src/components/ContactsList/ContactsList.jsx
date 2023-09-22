import { Item, List, DeleteBtn } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact} from 'Redux/Operations';
 import { selectVisibleContacts} from 'Redux/selectors';
// import { useEffect } from 'react';

// import { setContacts } from 'Redux/ContactsSlise';

export const ContactsList = () => {
  const selectedContact = useSelector(selectVisibleContacts);
  // const filters = useSelector(state => state.filter);
  const dispatch = useDispatch();

  


//   useEffect(() => {
   
//     dispatch(setContacts(contacts));
//   }, [dispatch, contacts]);

//   const selectedContact = contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(filters)
// );
//   console.log(selectedContact)

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