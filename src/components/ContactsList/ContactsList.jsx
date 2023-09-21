import { Item, List, DeleteBtn } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/Operations';
import { selectContacts, selectFilters } from 'Redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const selectedList = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters)
    );
  };

  const selectedContact = selectedList();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

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