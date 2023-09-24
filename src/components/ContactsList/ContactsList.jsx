import { Item, List, DeleteBtn } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts} from 'Redux/selectors';
 import { useEffect } from 'react';
import { removeContact, fetchAllContacts} from 'Redux/Operations';



export const ContactsList = () => {
   const selectedContact = useSelector(selectVisibleContacts);
// const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchAllContacts());
 }, [dispatch]);



//  const selectedContact = contacts.filter((contact) =>
//    contact.name.toLowerCase().includes(filters)
//  );


  // const handleDeleteContact = (id) => {
  //    dispatch(removeContact(id));
  //  };

  // const handleDeleteContact = async (id) => {
  //   try {
  //     await dispatch(removeContact(id));
  //   } catch (error) {
  //     console.error('Error deleting contact:', error);
  //   }
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