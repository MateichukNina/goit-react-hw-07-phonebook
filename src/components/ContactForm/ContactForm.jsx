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
import { useDispatch } from 'react-redux';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  number: Yup.string().min(6).max(10).required(''),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();

   const handleAddContact = (values, { resetForm }) => {
    dispatch(newContact({ ...values }));
    resetForm();
  };

  // const handleAddContact = async (values, { resetForm }) => {
  //   try {
  // // тут ніякий асінк не треба робити !!!
  //     // await dispatch(addContact({ ...values, id: nanoid() }));
  //     resetForm();
  
  //     // const response = await dispatch(fetchContacts());
     
  //   } catch (error) {
  //     console.error('Error adding contact:', error);
  //   }
  // };
  
 

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

