import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  StyledForm,
  StyledField,
  StyledError,
  StyledLable,
  Button,
} from './ContactForm.styled';
import { newContact} from 'Redux/Operations';
import { selectContacts } from 'Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';


const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  number: Yup.string().min(6).max(10).required(''),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  //  const handleAddContact = (values, { resetForm }) => {
  //   dispatch(newContact({ ...values }));
  //   resetForm();
  // };
  

  const handleAddContact = async (values, { resetForm }) => {
    try {
      if (contacts.some(contact => contact.name === values.name)) {
        alert(`${values.name} is already in contacts`);
      } else if (contacts.some(contact => contact.number === values.number)) {
        alert(`${values.number} is already in contacts`);
      } else {
        await dispatch(newContact({ ...values }));
        resetForm();
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };


  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={handleAddContact}
      >
        <StyledForm autoComplete="off">
          <StyledLable>
            Name
            <StyledField name="name" placeholder="Jane" />
            <StyledError name="name" />
          </StyledLable>
          <StyledLable>
            Number
            <StyledField name="number" placeholder="Enter Phone" />
            <StyledError name="number" />
          </StyledLable>
          <Button type="submit">Add Contact</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};

