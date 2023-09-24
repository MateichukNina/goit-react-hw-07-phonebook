import { Item, List, DeleteBtn } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts} from 'Redux/selectors';
 import { useEffect } from 'react';
import { removeContact, fetchAllContacts} from 'Redux/Operations';



export const ContactsList = () => {
   const selectedContact = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchAllContacts());
 }, [dispatch]);



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